import { ChevronRight, Star, Heart, ShoppingCart, Eye, ChevronDown } from "lucide-react"
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../actions/productThunks";
import { FETCHING } from "../reducers/productReducer";
import { addToCart } from "../api/cartApi";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { images } from "../utils/assets";

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
  const history = useHistory();

  const { productId } = props.match.params;

  const product = useSelector((s) => s.product.selectedProduct);
  const fetchState = useSelector((s) => s.product.fetchState);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  const images = useMemo(() => product?.images || [], [product]);

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (!product?.id) return;

    const stored = JSON.parse(
      localStorage.getItem("wishlist") || "[]"
    );

    setFavorite(stored.includes(product.id));
  }, [product?.id]);

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

  const scrollToDescription = () => {
    document
      .getElementById("product-description")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const resolveImage = (imagePath) => {
    if (!imagePath) return "";

    const fileName = imagePath.split("/").pop();

    return images[fileName] || imagePath;
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-3 items-center py-4">
          <a href="/">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="/shop">Shop</a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-start">
          <div className="pb-12 flex flex-col gap-4 min-w-0">
            <div className="w-full bg-[#FAFAFA] flex items-center justify-center overflow-hidden">
              <img
                src={productImage}
                alt={product?.name || "Product"}
                className="w-full max-h-[560px] object-contain"
              />
            </div>

            <div className="flex gap-4 flex-wrap">
              <button
                type="button"
                className="w-20 h-20 border border-[#ECECEC] rounded overflow-hidden bg-white"
              >
                <img
                  src={productImage}
                  alt={`${product?.name || "Product"} thumbnail 1`}
                  className="w-full h-full object-contain"
                />
              </button>

              <button
                type="button"
                className="w-20 h-20 border border-[#ECECEC] rounded overflow-hidden bg-white"
              >
                <img
                  src={productImage}
                  alt={`${product?.name || "Product"} thumbnail 2`}
                  className="w-full h-full object-contain"
                />
              </button>
            </div>
          </div>

          <div className="py-4 flex flex-col gap-4 min-w-0">
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
          <section
            id="product-description"
            className="scroll-mt-24 mt-10"
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-20 font-semibold border-b border-[#ECECEC] py-5">
              <h6>Description</h6>
              <h6>Additional Information</h6>
              <h6>Reviews (0)</h6>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              Sample Description
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <div>
              <img
                src={images["salad.jpg"]}
                alt="Product detail"
                className="w-[316px] h-[372px] object-cover rounded"
              />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mt-5">
            {relatedProducts.map((rp) => (
              <div key={rp.id}>
                <img
                  src={resolveImage(rp.img)}
                  alt={rp.name}
                  className="w-[280px]"
                />
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

        <div className="px-2 py-[50px] flex flex-wrap gap-10 items-center justify-center">
          <div className="clients-item"><img
            src={images["hooli.png"]}
            alt="Hooli"
            className="max-w-40"
          /></div>
          <div className="clients-item"><img
            src={images["lyft.png"]}
            alt="Lyft"
            className="max-w-40"
          /></div>
          <div className="clients-item"><img
            src={images["meta.png"]}
            alt="Meta"
            className="max-w-40"
          /></div>
          <div className="clients-item"><img
            src={images["stripe.png"]}
            alt="Stripe"
            className="max-w-40"
          /></div>
          <div className="clients-item"><img
            src={images["aws.png"]}
            alt="AWS"
            className="max-w-40"
          /></div>
          <div className="clients-item"><img
            src={images["reddit.png"]}
            alt="Reddit"
            className="max-w-40"
          /></div>
        </div>
      </div>
    </div>
  );
}