import { Link } from "react-router-dom";
import {
  shopCards,
  bestSellerTabs,
  bestSellerProducts,
  benefits,
  allProducts,
  blogPosts,
} from "../data/home.data.js";

import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MessageCircleMore,
  Download,
} from "lucide-react";

import { images } from "../utils/assets";
import { useState } from "react";

const resolveImage = (imagePath) => {
  if (!imagePath) return "";

  const fileName = imagePath.split("/").pop();

  return images[fileName] || imagePath;
};

function Container({ children, className = "" }) {
  return <div className={`max-w-7xl mx-auto px-4 ${className}`}>{children}</div>;
}

export default function PageContent() {
  const [activeBestSellerTab, setActiveBestSellerTab] = useState(
    bestSellerTabs[0]
  );

  const filteredBestSellerProducts = bestSellerProducts.filter(
    (product) =>
      String(product.tab || product.category || "").toLowerCase() ===
      String(activeBestSellerTab).toLowerCase()
  );
  return (
    <div className="w-full">
      {/* ShopCards */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
          {shopCards.map((card) => (
            <div
              key={card.id}
              className="flex items-center justify-between w-full min-h-[220px] border border-[#ECECEC] bg-white p-6 overflow-hidden"
            >
              <div className="flex flex-col gap-2 justify-center">
                <h6 className="font-normal text-sm text-gray-600">
                  {card.tag}
                </h6>

                <h2 className="font-bold text-2xl">
                  {card.title}
                </h2>

                <Link
                  to={card.link || "/shop"}
                  className="font-medium text-sm text-[#23A6F0]"
                >
                  {card.cta}
                </Link>
              </div>

              <img
                src={resolveImage(card.img)}
                className="w-[46%] h-[180px] object-contain"
                alt={card.title}
              />
            </div>
          ))}
        </div>
      </Container>

      {/* Bestseller (tek kez) */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 py-16 items-stretch">
          <div
            className="relative min-h-[620px] bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `url(${images["barista-drink.jpg"]})`,
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative z-10 p-8">
              <h6 className="font-bold text-sm uppercase">
                Featured Products
              </h6>

              <p className="mt-2 text-sm">
                5 Items
              </p>

              <Link
                to="/shop"
                className="inline-block mt-4 font-semibold text-[#23A6F0]"
              >
                Explore Items →
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-5 border-b border-gray-200 pb-4">
              <h3 className="font-bold text-xl">
                Bestseller Products
              </h3>

              <div className="flex flex-wrap gap-5 text-gray-600">
                {bestSellerTabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveBestSellerTab(tab)}
                    className={`
      text-sm font-semibold px-2 py-3
      border-b-2
      transition-colors
      ${activeBestSellerTab === tab
                        ? "text-[#23A6F0] border-[#23A6F0]"
                        : "text-gray-500 border-transparent"
                      }
    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="ml-auto flex gap-2">
                <button
                  type="button"
                  className="border border-gray-300 rounded-full p-1"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  className="border border-gray-300 rounded-full p-1"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-12 mt-8">
              {filteredBestSellerProducts.slice(0, 6).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/shop"
                className="inline-flex bg-[#23A6F0] px-8 py-3 rounded font-bold !text-white"
              >
                Browse All Products
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Most Popular */}
      <Container>
        <section className="py-16 grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] min-h-[520px]">
          <div className="overflow-hidden">
            <img
              src={images["shop.jpg"]}
              alt="Most popular collection"
              className="w-full h-full min-h-[520px] object-cover"
            />
          </div>

          <div className="bg-[#FAFAFA] flex flex-col items-center justify-center text-center px-10 py-12">
            <h3 className="font-bold text-2xl uppercase">
              Most Popular
            </h3>

            <p className="text-sm text-gray-500 max-w-xs mt-3">
              Discover our most popular products and seasonal selections.
            </p>

            <img
              src={images["product-dress.jpg"]}
              alt="Popular product"
              className="w-44 h-44 object-contain mt-8"
            />

            <h5 className="font-bold mt-5">
              Dress
            </h5>

            <div className="flex gap-2 mt-3">
              <span className="text-gray-400">$16.48</span>
              <span className="text-[#23856D] font-bold">$6.48</span>
            </div>
          </div>
        </section>
      </Container>

      {/* Popular */}
      <Container>
        <div className="px-2 py-12">

          {/* Popular Benefits */}
          <section className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-start gap-4">
                <h2 className="font-bold text-3xl text-[#E74040]">
                  {benefit.id}.
                </h2>
                <div>
                  <h6 className="font-bold text-sm">{benefit.title}</h6>
                  <p className="text-xs text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </Container>

      {/* Second Bestseller */}
      <Container>
        <section className="py-16 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          <div>
            <div className="flex items-center border-b border-gray-200 pb-4">
              <h3 className="font-bold uppercase">
                Bestseller Products
              </h3>

              <div className="ml-8 flex gap-5 text-sm text-gray-500">
                <button className="text-[#23A6F0]">Men</button>
                <button>Women</button>
                <button>Accessories</button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {bestSellerProducts.slice(0, 6).map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  className="
      flex flex-col items-center text-center gap-2 py-2
      group
      !text-[#252B42]
    "
                >
                  <div className="
      h-40 w-full
      flex items-center justify-center
      bg-gray-50
      rounded-xl
      overflow-hidden
    ">
                    <img
                      src={resolveImage(product.img)}
                      className="
          w-full h-full
          object-contain
          transition-transform duration-200
          group-hover:scale-105
        "
                      alt={product.name}
                    />
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-bold group-hover:text-[#23A6F0]">
                      {product.name}
                    </h5>

                    <span className="text-sm text-gray-500">
                      {product.category}
                    </span>

                    <div className="flex justify-center gap-2">
                      <span className="text-[#BDBDBD] font-bold">
                        ${Number(product.oldPrice || 0).toFixed(2)}
                      </span>

                      <span className="text-[#23856D] font-bold">
                        ${Number(product.price || 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="min-h-[620px] bg-cover bg-center"
            style={{
              backgroundImage: `url(${images["pillow.jpg"]})`,
            }}
          >
            <div className="p-8">
              <h6 className="font-bold uppercase">
                Featured Products
              </h6>
              <p className="text-sm">5 Items</p>
            </div>
          </div>
        </section>
      </Container>

      {/* Second Most Popular */}
      <Container>
        <section className="py-16 grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] min-h-[520px]">
          <div className="bg-[#FAFAFA] flex flex-col items-center justify-center text-center p-10">
            <h3 className="font-bold text-2xl uppercase">
              Most Popular
            </h3>

            <p className="text-gray-500 text-sm mt-3 max-w-xs">
              Explore standout pieces selected by our customers.
            </p>

            <img
              src={images["product-sweater.jpg"]}
              alt="Popular product"
              className="w-44 h-44 object-contain mt-8"
            />

            <h5 className="font-bold mt-5">
              Men's
            </h5>

            <div className="flex gap-2 mt-3">
              <span className="text-gray-400">$16.48</span>
              <span className="text-[#23856D] font-bold">$6.48</span>
            </div>
          </div>

          <div>
            <img
              src={images["sofa.jpg"]}
              alt="Popular campaign"
              className="w-full h-full min-h-[520px] object-cover"
            />
          </div>
        </section>
      </Container>


      {/* All Products (tek satır, hafif) */}
      <Container>
        <div className="px-2 py-12">
          <div className="flex items-center justify-between border-b-2 border-[#ECECEC] pb-3">
            <h3 className="font-bold text-2xl">PRODUCT PICKS</h3>
            <Link to="/shop" className="text-[#23A6F0] font-bold">
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {allProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="h-64 w-full flex items-center justify-center bg-white rounded-xl overflow-hidden border border-[#ECECEC]">
                  <img
                    src={resolveImage(product.img)}
                    alt={product.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <h5 className="font-bold text-base">{product.name}</h5>

                <Link
                  to="/shop"
                  className="text-sm text-gray-500 hover:underline"
                >
                  {product.category}
                </Link>

                <div className="flex gap-2">
                  <span className="text-[#BDBDBD] font-bold">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                  <span className="text-[#23856D] font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Clients */}
      <Container>
        <div className="py-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
          {[
            "hooli",
            "lyft",
            "meta",
            "stripe",
            "aws",
            "reddit",
          ].map((logo) => (
            <div
              key={logo}
              className="h-16 flex items-center justify-center"
            >
              <img
                src={images[`${logo}.png`]}
                alt={logo}
                className={`
        w-auto h-auto object-contain grayscale opacity-65
        ${logo === "hooli"
                    ? "max-w-[170px] max-h-14 scale-125"
                    : "max-w-[130px] max-h-12"
                  }
      `}
              />
            </div>
          ))}
        </div>
      </Container>

      {/* Blogs */}
      <Container>
        <div className="px-2 py-28">
          <h6 className="font-bold text-sm text-[#23A6F0] text-center">
            Practice Advice
          </h6>
          <h2 className="font-bold text-[40px] text-center">Featured Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {blogPosts.map((p) => (
              <div key={p.id} className="border border-[#ECECEC] bg-white shadow-sm">
                <img
                  src={resolveImage(p.img)}
                  alt={p.title}
                  className="w-full h-64 object-cover"
                />

                <div className="px-[25px] pt-[25px] pb-[35px] space-y-3">
                  <ul className="flex gap-[15px] text-xs text-gray-500">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <h4 className="text-xl font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600">{p.desc}</p>

                  <div className="flex text-xs py-[15px] justify-between text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{p.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MessageCircleMore className="w-4 h-4" />
                      <span>{p.comments} comments</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm font-semibold">
                    <Link to="/blog" className="hover:underline">
                      Read More
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="flex flex-col items-center text-center gap-2 min-w-0">
      <div className="w-full h-[200px] flex items-center justify-center bg-[#FAFAFA] overflow-hidden">
        <img
          src={resolveImage(product.img)}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <h5 className="font-bold text-base mt-1">
        {product.name}
      </h5>

      <Link
        to="/shop"
        className="text-sm text-[#737373]"
      >
        {product.category}
      </Link>

      <div className="flex justify-center gap-2">
        <span className="text-[#BDBDBD] font-bold">
          ${Number(product.oldPrice || 0).toFixed(2)}
        </span>

        <span className="text-[#23856D] font-bold">
          ${Number(product.price || 0).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
