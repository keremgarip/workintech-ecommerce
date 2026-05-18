import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByQuery } from "../actions/productThunks";
import { FETCHING } from "../reducers/productReducer";
import { Link } from "react-router-dom";
import { LayoutGrid, ListChecks } from "lucide-react";
import { setOffset, setFilter, setSort } from "../actions/productActions";
import { addToCart } from "../api/cartApi";

function Spinner() {
    return (
        <div className="w-full py-12 flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-transparent" />
        </div>
    );
}

export default function Shop(props) {
    const [view, setView] = useState("grid");
    const [showFilter, setShowFilter] = useState(false);

    const dispatch = useDispatch();
    const { productList, fetchState, total, limit, offset, filter, sort } = useSelector((s) => s.product);

    const { gender, categoryName } = props?.match?.params || {};
    const categoryId = props?.match?.params?.categoryId;
    const [searchText, setSearchText] = useState(filter || "");

    const query = useMemo(() => {
        const q = {};

        if (categoryId) q.category = categoryId;
        if (filter) q.filter = filter;
        if (sort) q.sort = sort;

        return q;
    }, [categoryId, filter, sort]);

    useEffect(() => {
        dispatch(fetchProductsByQuery(query));
    }, [dispatch, query]);

    useEffect(() => {
        dispatch(setOffset(0));
    }, [dispatch, categoryId]);

    const page = Math.floor(offset / limit) + 1;
    const pageCount = Math.max(1, Math.ceil(total / limit));

    const goToPage = (p) => {
        const newOffset = (p - 1) * limit;
        dispatch(setOffset(newOffset));
    };

    const onFirst = () => goToPage(1);
    const onPrev = () => goToPage(page - 1);
    const onNext = () => goToPage(page + 1);
    const onLast = () => goToPage(pageCount);

    const totalNum = Number(total) || 0;
    const start = totalNum === 0 ? 0 : offset + 1;
    const end = Math.min(offset + limit, totalNum);

    useEffect(() => {
        setSearchText(filter || "");
    }, [filter]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(setOffset(0));
            dispatch(setFilter(searchText));
        }, 500);

        return () => clearTimeout(timeout);
    }, [searchText, dispatch]);

    const handleAddToCart = async (e, productId) => {
        e.preventDefault();
        e.stopPropagation();

        const userId = Number(localStorage.getItem("userId"));

        if (!userId) {
            alert("Lütfen önce giriş yapınız.");
            return;
        }

        await addToCart(userId, productId, 1);

        window.dispatchEvent(new Event("cartUpdated"));

        alert("Ürün sepete eklendi");
    }

    if (fetchState === FETCHING) return <Spinner />;

    return (
        <main className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex items-end justify-between mb-6 py-6">
                    <h1 className="text-3xl font-bold">Shop</h1>
                </div>
                <div>
                    <div className="py-6 flex justify-between">
                        <h6 className="text-lg text-[#737373] font-bold">Showing {start}-{end} of {totalNum} results</h6>
                        <div className="px-[1px] flex gap-[15px] items-center">
                            <h6 className="text-lg font-bold">Views:</h6>
                            <button
                                type="button"
                                onClick={() => setView("grid")}
                                className={`p-2 border rounded-[5px] cursor-pointer ${view === "grid" ? "border-[#23A6F0]" : "border-[#ECECEC]"
                                    }`}
                                title="Grid"
                            >
                                <LayoutGrid className="w-5 h-5 text-gray-700" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setView("list")}
                                className={`p-2 border rounded-[5px] cursor-pointer ${view === "list" ? "border-[#23A6F0]" : "border-[#ECECEC]"
                                    }`}
                                title="List"
                            >
                                <ListChecks className="w-5 h-5 text-gray-700" />
                            </button>
                        </div>
                        <div className="flex gap-[15px] font-base">
                            <div className="p-4 bg-[#F9F9F9] flex border rounded-[5px] border-[#DDDDDD]">
                                <select
                                    value={sort || ""}
                                    onChange={(e) => {
                                        dispatch(setOffset(0));
                                        dispatch(setSort(e.target.value));
                                    }}
                                    className="bg-transparent outline-none"
                                >
                                    <option value="">Popularity</option>
                                    <option value="price:asc">Price: Low to High</option>
                                    <option value="price:desc">Price: High to Low</option>
                                    <option value="rating:asc">Rating: Low to High</option>
                                    <option value="rating:desc">Rating: High to Low</option>
                                </select>
                            </div>
                            <button
                                type="button"
                                onClick={() => setShowFilter((p) => !p)}
                                className="font-bold bg-[#23A6F0] text-white rounded-[5px] py-2.5 px-5 !text-black"
                            >
                                Filter
                            </button>
                        </div>
                    </div>
                    {showFilter && (
                        <div className="mb-6">
                            <input
                                value={searchText}
                                onChange={(e) => {
                                    dispatch(setFilter(e.target.value));
                                }}
                                placeholder="Search products..."
                                className="w-full border border-[#ECECEC] rounded px-3 py-2"
                            />
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-4 text-center gap-6">
                    {productList.map((p) => (
                        <Link
                            key={p.id}
                            to={`/product/${p.id}`}
                            className="block border border-[#ECECEC] rounded p-3 hover:border-[#23A6F0]"
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={p.imageUrl || p.images?.[0]?.url || p.image || "/src/assets/ice-cream.png"}
                                    alt={p.name || p.title}
                                    className="w-52"
                                />
                                <div className="mt-3">
                                    <h5 className="font-semibold text-black">{p.name || p.title}</h5>
                                    <div className="flex gap-[5px] justify-center mt-2">
                                        <h5 className="text-[#23856D] font-bold text-black">
                                            ${Number(p.price || 0).toFixed(2)}
                                        </h5>
                                    </div>
                                    <button
                                        onClick={(e) => handleAddToCart(e, p.id)}
                                        className="mt-3 bg-[#23A6F0] text-black px-4 py-2 rounded font-bold">
                                        Sepete Ekle
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <div className="inline-flex overflow-hidden rounded-lg border border-gray-300 bg-white !text-black">
                    <button
                        onClick={onFirst}
                        disabled={page === 1}
                        className={`px-6 py-3 ${page === 1 ? "text-gray-400 bg-gray-100 cursor-not-allowed" : "text-[#23A6F0]"}`}
                    >
                        First
                    </button>

                    <button
                        onClick={onPrev}
                        disabled={page === 1}
                        className={`px-6 py-3 ${page === 1 ? "text-gray-400 bg-gray-100 cursor-not-allowed" : "text-[#23A6F0]"}`}
                    >
                        Prev
                    </button>

                    {Array.from({ length: pageCount }, (_, i) => i + 1)
                        .slice(Math.max(0, page - 3), Math.max(0, page - 3) + 5) // 5 sayfa göster
                        .map((p) => (
                            <button
                                key={p}
                                onClick={() => goToPage(p)}
                                className={`px-4 py-3 font-bold ${p === page ? "bg-[#23A6F0] text-black" : "text-[#23A6F0]"
                                    }`}
                            >
                                {p}
                            </button>
                        ))}

                    <button
                        onClick={onNext}
                        disabled={page === pageCount}
                        className={`px-6 py-3 ${page === pageCount ? "text-gray-400 bg-gray-100 cursor-not-allowed" : "text-[#23A6F0]"}`}
                    >
                        Next
                    </button>

                    <button
                        onClick={onLast}
                        disabled={page === pageCount}
                        className={`px-6 py-3 ${page === pageCount ? "text-gray-400 bg-gray-100 cursor-not-allowed" : "text-[#23A6F0]"}`}
                    >
                        Last
                    </button>
                </div>
            </div>
            <div className="px-2 py-[50px] flex gap-30 flex items-center justify-center">
                <div className="clients-item">
                    <img src="src\assets\hooli.png" alt="Hooli" className="max-w-40" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\lyft.png" alt="Lyft" className="max-w-40 max-h-15" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\meta.png" alt="Meta" className="max-w-40 max-h-18" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\stripe.png" alt="Stripe" className="max-w-40 max-h-13" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\aws.png" alt="Amazon Web Services" className="max-w-40 max-h-15" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\reddit.png" alt="Reddit" className="max-w-40 max-h-18" />
                </div>
            </div>
        </main>
    )
}