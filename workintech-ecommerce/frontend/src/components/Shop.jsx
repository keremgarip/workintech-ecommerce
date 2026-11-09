import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByQuery } from "../actions/productThunks";
import { FETCHING } from "../reducers/productReducer";
import { Link } from "react-router-dom";
import { LayoutGrid, ListChecks } from "lucide-react";
import { setOffset, setSort } from "../actions/productActions";
import { addToCart } from "../api/cartApi";
import { toast } from "react-toastify";

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
    const { productList, fetchState, total, limit, offset, sort } = useSelector((s) => s.product);

    const { gender, categoryName } = props?.match?.params || {};
    const categoryId = props?.match?.params?.categoryId;

    const [priceFilter, setPriceFilter] = useState("all");
    const [stockFilter, setStockFilter] = useState("all");

    const query = useMemo(() => {
        const queryParams = {};

        if (categoryId) queryParams.category = categoryId;
        if (sort) queryParams.sort = sort;

        return queryParams;
    }, [categoryId, sort]);

    const apiPage = Math.floor(offset / limit);
    const page = apiPage + 1;
    const pageCount = Math.max(1, Math.ceil(total / limit));

    useEffect(() => {
        dispatch(
            fetchProductsByQuery({
                ...query,
                page: apiPage,
                size: limit,
            })
        );
    }, [dispatch, query, apiPage, limit]);

    useEffect(() => {
        dispatch(setOffset(0));
    }, [dispatch, categoryId]);

    const goToPage = (targetPage) => {
        const safePage = Math.min(
            Math.max(targetPage, 1),
            pageCount
        );

        dispatch(setOffset((safePage - 1) * limit));
    };

    const onFirst = () => goToPage(1);
    const onPrev = () => goToPage(page - 1);
    const onNext = () => goToPage(page + 1);
    const onLast = () => goToPage(pageCount);

    const totalNum = Number(total) || 0;
    const start = totalNum === 0 ? 0 : offset + 1;
    const end = Math.min(offset + limit, totalNum);

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

        toast.success("Sepete eklendi");
    }

    const filteredProducts = useMemo(() => {
        return productList.filter((product) => {
            const price = Number(product.price || 0);
            const stock = Number(product.stock || 0);

            let matchesPrice = true;
            let matchesStock = true;

            switch (priceFilter) {
                case "0-25":
                    matchesPrice = price >= 0 && price <= 25;
                    break;

                case "25-50":
                    matchesPrice = price > 25 && price <= 50;
                    break;

                case "50-100":
                    matchesPrice = price > 50 && price <= 100;
                    break;

                case "100+":
                    matchesPrice = price > 100;
                    break;

                default:
                    matchesPrice = true;
            }

            if (stockFilter === "in-stock") {
                matchesStock = stock > 0;
            } else if (stockFilter === "out-of-stock") {
                matchesStock = stock <= 0;
            }

            return matchesPrice && matchesStock;
        });
    }, [productList, priceFilter, stockFilter]);

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
                                    <option value="price,asc">Price: Low to High</option>
                                    <option value="price,desc">Price: High to Low</option>
                                    <option value="name,asc">Name: A-Z</option>
                                    <option value="name,desc">Name: Z-A</option>
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
                        <div className="mb-8 p-5 border border-[#ECECEC] rounded-lg bg-[#FAFAFA]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                                <div>
                                    <label className="block font-bold mb-2">
                                        Price Range
                                    </label>

                                    <select
                                        value={priceFilter}
                                        onChange={(e) => setPriceFilter(e.target.value)}
                                        className="w-full bg-white border border-[#DDDDDD] rounded px-4 py-3"
                                    >
                                        <option value="all">All Prices</option>
                                        <option value="0-25">$0 - $25</option>
                                        <option value="25-50">$25 - $50</option>
                                        <option value="50-100">$50 - $100</option>
                                        <option value="100+">$100+</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block font-bold mb-2">
                                        Availability
                                    </label>

                                    <select
                                        value={stockFilter}
                                        onChange={(e) => setStockFilter(e.target.value)}
                                        className="w-full bg-white border border-[#DDDDDD] rounded px-4 py-3"
                                    >
                                        <option value="all">All Products</option>
                                        <option value="in-stock">In Stock</option>
                                        <option value="out-of-stock">Out of Stock</option>
                                    </select>
                                </div>

                            </div>

                            <div className="flex justify-end mt-5">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setPriceFilter("all");
                                        setStockFilter("all");
                                    }}
                                    className="px-5 py-2 border border-[#23A6F0] rounded font-bold !text-[#23A6F0]"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-4 text-center gap-6">
                    {view === "grid" ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-6">
                            {filteredProducts.map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/product/${p.id}`}
                                    className="block border border-[#ECECEC] rounded p-3 hover:border-[#23A6F0]"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="w-full h-64 flex items-center justify-center overflow-hidden bg-white">
                                            <img
                                                src={p.imageUrl || p.images?.[0]?.url || p.image || ""}
                                                alt={p.name || p.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <div className="mt-3">
                                            <h5 className="font-semibold !text-[#252B42]">
                                                {p.name || p.title}
                                            </h5>

                                            <div className="flex gap-[5px] justify-center mt-2">
                                                <h5 className="text-[#23856D] font-bold">
                                                    ${Number(p.price || 0).toFixed(2)}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col gap-5">
                            {filteredProducts.map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/product/${p.id}`}
                                    className="
          flex flex-col sm:flex-row
          gap-6
          border border-[#ECECEC]
          rounded-lg
          p-4
          hover:border-[#23A6F0]
          !text-[#252B42]
        "
                                >
                                    <div className="w-full sm:w-[220px] h-[220px] flex-shrink-0 bg-white flex items-center justify-center overflow-hidden">
                                        <img
                                            src={p.imageUrl || p.images?.[0]?.url || p.image || ""}
                                            alt={p.name || p.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="flex flex-col justify-center flex-1">
                                        <h3 className="text-xl font-bold">
                                            {p.name || p.title}
                                        </h3>

                                        {p.description && (
                                            <p className="text-[#737373] mt-3 line-clamp-3">
                                                {p.description}
                                            </p>
                                        )}

                                        <div className="mt-4 flex flex-wrap items-center gap-6">
                                            <span className="text-[#23856D] text-lg font-bold">
                                                ${Number(p.price || 0).toFixed(2)}
                                            </span>

                                            {p.stock !== undefined && (
                                                <span
                                                    className={`font-semibold ${Number(p.stock) > 0
                                                        ? "text-[#23A6F0]"
                                                        : "text-red-500"
                                                        }`}
                                                >
                                                    {Number(p.stock) > 0
                                                        ? `${p.stock} in stock`
                                                        : "Out of stock"}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-4 text-center gap-6">
                    {filteredProducts.length === 0 && (
                        <div className="py-16 text-center">
                            <h3 className="text-xl font-bold">
                                No products found
                            </h3>

                            <p className="text-[#737373] mt-2">
                                Try changing your filter options.
                            </p>
                        </div>
                    )}
            </div>
            <div className="flex justify-center mt-8">
                <div className="inline-flex overflow-hidden rounded-lg border border-gray-300 bg-white !text-black">
                    <button
                        type="button"
                        onClick={onFirst}
                        disabled={page === 1}
                        className={`px-6 py-3 ${page === 1
                            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                            : "text-[#23A6F0]"
                            }`}
                    >
                        First
                    </button>

                    <button
                        type="button"
                        onClick={onPrev}
                        disabled={page === 1}
                        className={`px-6 py-3 ${page === 1
                            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                            : "text-[#23A6F0]"
                            }`}
                    >
                        Prev
                    </button>

                    {Array.from(
                        {
                            length: Math.min(5, pageCount),
                        },
                        (_, index) => {
                            const startPage = Math.min(
                                Math.max(page - 2, 1),
                                Math.max(pageCount - 4, 1)
                            );

                            return startPage + index;
                        }
                    ).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            type="button"
                            onClick={() => goToPage(pageNumber)}
                            aria-current={pageNumber === page ? "page" : undefined}
                            className={`px-4 py-3 font-bold ${pageNumber === page
                                ? "bg-[#23A6F0] text-black"
                                : "text-[#23A6F0]"
                                }`}
                        >
                            {pageNumber}
                        </button>
                    ))}

                    <button
                        type="button"
                        onClick={onNext}
                        disabled={page === pageCount}
                        className={`px-6 py-3 ${page === pageCount
                            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                            : "text-[#23A6F0]"
                            }`}
                    >
                        Next
                    </button>

                    <button
                        type="button"
                        onClick={onLast}
                        disabled={page === pageCount}
                        className={`px-6 py-3 ${page === pageCount
                            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                            : "text-[#23A6F0]"
                            }`}
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