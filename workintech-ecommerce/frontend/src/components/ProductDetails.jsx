import { ChevronRight, Star, Heart, ShoppingBasket, Eye, ChevronDown } from "lucide-react"
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../actions/productThunks";
import { FETCHING } from "../reducers/productReducer";
import { addToCart } from "../api/cartApi";
import { useState } from "react";

import { relatedProducts } from "../data/home.data"

function Spinner() {
  return (
    <div className="w-full py-12 flex justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-transparent" />
    </div>
  );
}

function Stars({ value = 0 }) {
  const full = Math.round(Number(value) || 0);
  return (
    <div className="flex gap-[5px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={i < full ? "" : "opacity-30"} />
      ))}
    </div>
  );
}

export default function ProductDetails(props) {
  const dispatch = useDispatch();
  const { productId } = props.match.params;

  const product = useSelector((s) => s.product.selectedProduct);
  const fetchState = useSelector((s) => s.product.fetchState);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const images = useMemo(() => product?.images || [], [product]);

  const [favorite, setFavorite] = useState(false);
  const [adding, setAdding] = useState(false);



  const productImage = product?.imageUrl || product?.image || product?.img || "";

  if (fetchState === FETCHING || !product) return <Spinner />;

  const title = product.name ?? product.title ?? "Product";
  const price = Number(product.price || 0);
  const rating = Number(product.rating || 0);
  const stock = Number(product.stock ?? 0);
  const inStock = stock > 0;

  const desc = product.description || "No description provided.";

  const handleAddToCart = async () => {
    const userId = Number(localStorage.getItem("userId"));

    if (!userId) {
      history.push("/login");
      return;
    }

    try {
      setAdding(true);

      await addToCart(
        userId,
        product.id,
        1
      );

      window.dispatchEvent(
        new Event("cartUpdated")
      );
    } catch (error) {
      console.error(
        "Add to cart failed:",
        error?.response?.data || error.message
      );
    } finally {
      setAdding(false);
    }
  };

  const toggleFavorite = () => {
    const stored = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    let next;

    if (stored.includes(product.id)) {
      next = stored.filter(
        (id) => id !== product.id
      );
      setFavorite(false);
    } else {
      next = [...stored, product.id];
      setFavorite(true);
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(next)
    );
  };

  useEffect(() => {
    if (!product?.id) return;

    const stored = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    setFavorite(stored.includes(product.id));
  }, [product?.id]);

  const scrollToDescription = () => {
    document
      .getElementById("product-description")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-[15px] py-2.5">
            <a href="/">Home</a>
            <ChevronRight />
            <a href="/shop">Shop</a>
          </div>
        </div>

        <div className="flex gap-7.5">
          <div className="pb-12 flex flex-col gap-6">
            <img
              src={productImage}
              alt={product?.name || "Product"}
              className="w-full aspect-square max-h-[520px]"
            />

            <div className="flex gap-5">
              <img
                src={productImage}
                alt={product?.name || "Product"}
                className="h-[100px] w-[100px] object-contain bg-white border border-[#ECECEC] rounded"
              />
              <img
                src={productImage}
                alt={product?.name || "Product"}
                className="h-[100px] w-[100px] object-contain bg-white border border-[#ECECEC] rounded"
              />
            </div>
          </div>

          <div className="py-4 flex flex-col gap-3">
            <h4 className="text-xl font-semibold">{title}</h4>

            <div className="flex gap-3 items-center">
              <Stars value={rating} />
              <h6 className="font-bold">{rating.toFixed(1)} Rating</h6>
            </div>

            <div className="mt-2 flex flex-col gap-3">
              <h5 className="font-bold text-2xl">${price.toFixed(2)}</h5>

              <div className="flex gap-1 font-bold">
                <span className="text-[#737373]">Availability :</span>
                <span className={inStock ? "text-[#23A6F0]" : "text-red-600"}>
                  {inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            <p className="text-[#737373] leading-relaxed">{desc}</p>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={adding || product.stock <= 0}
                className="
            bg-[#23A6F0]
            !text-white
            font-bold
            px-6
            py-3
            rounded
            disabled:opacity-50
            disabled:cursor-not-allowed
        "
              >
                {product.stock <= 0
                  ? "Out of Stock"
                  : adding
                    ? "Adding..."
                    : "Add to Cart"}
              </button>

              <button
                type="button"
                onClick={toggleFavorite}
                className="
            w-11 h-11
            rounded-full
            border border-gray-300
            bg-white
            !text-[#252B42]
            flex items-center justify-center
        "
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${favorite
                      ? "fill-red-500 text-red-500"
                      : ""
                    }`}
                />
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="
            w-11 h-11
            rounded-full
            border border-gray-300
            bg-white
            !text-[#252B42]
            flex items-center justify-center
        "
                aria-label="Add to cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={scrollToDescription}
                className="
            w-11 h-11
            rounded-full
            border border-gray-300
            bg-white
            !text-[#252B42]
            flex items-center justify-center
        "
                aria-label="View description"
              >
                <Eye className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center gap-20 font-semibold border-b border-[#ECECEC] py-5">
            <h6>Description</h6>
            <h6>Additional Infotmation</h6>
            <h6>Reviews (0)</h6>
          </div>

          <div className="flex gap-70 justify-between mt-4">
            <div>
              <img src="src/assets/salad.jpg" alt="" className="w-[316px] h-[372px] object-cover rounded" />
            </div>

            <div className="pb-[25px] flex flex-col gap-7.5">
              <h3 className="font-bold text-2xl">Product Detail</h3>
              <p className="text-[#737373]">{desc}</p>
            </div>

            <div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">Product Features</h3>
                <div className="flex flex-col gap-2 text-[#737373]">
                  <div className="flex gap-5"><ChevronDown /> Rating: {rating.toFixed(1)}</div>
                  <div className="flex gap-5"><ChevronDown /> Stock: {stock}</div>
                  <div className="flex gap-5"><ChevronDown /> Store ID: {product.store_id ?? "-"}</div>
                  <div className="flex gap-5"><ChevronDown /> Sell count: {product.sell_count ?? "-"}</div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-3">
                <h3 className="text-2xl font-bold">More</h3>
                <div className="flex flex-col gap-2 text-[#737373]">
                  <div className="flex gap-5"><ChevronDown /> Product ID: {product.id}</div>
                  <div className="flex gap-5"><ChevronDown /> Category ID: {product.category_id ?? "-"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#FAFAFA] py-12">
          <h3 className="font-bold text-2xl border-b-2 border-[#ECECEC]">BESTSELLER PRODUCTS</h3>
          <div className="grid grid-cols-4 text-center mt-5">
            {relatedProducts.map((rp) => (
              <div key={rp.id}>
                <img src={rp.img} alt={rp.name} className="w-[280px]" />
                <div className="px-[25px] pt-[25px] pb-[35px] text-center">
                  <h5 className="font-bold">{rp.name}</h5>
                  <a href="#" className="text-sm text-gray-500">{rp.category}</a>
                  <div className="flex gap-[5px] justify-center">
                    <h5 className="text-[#BDBDBD] font-bold">${rp.oldPrice.toFixed(2)}</h5>
                    <h5 className="text-[#23856D] font-bold">${rp.price.toFixed(2)}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-2 py-[50px] flex gap-30 flex items-center justify-center">
          <div className="clients-item"><img src="src/assets/hooli.png" alt="Hooli" className="max-w-40" /></div>
          <div className="clients-item"><img src="src/assets/lyft.png" alt="Lyft" className="max-w-40 max-h-15" /></div>
          <div className="clients-item"><img src="src/assets/meta.png" alt="Meta" className="max-w-40 max-h-18" /></div>
          <div className="clients-item"><img src="src/assets/stripe.png" alt="Stripe" className="max-w-40 max-h-13" /></div>
          <div className="clients-item"><img src="src/assets/aws.png" alt="Amazon Web Services" className="max-w-40 max-h-15" /></div>
          <div className="clients-item"><img src="src/assets/reddit.png" alt="Reddit" className="max-w-40 max-h-18" /></div>
        </div>
      </div>
    </div>
  );
}