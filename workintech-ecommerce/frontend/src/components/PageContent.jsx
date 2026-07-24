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

const resolveImage = (imagePath) => {
  if (!imagePath) return "";

  const fileName = imagePath.split("/").pop();

  return images[fileName] || imagePath;
};

function Container({ children, className = "" }) {
  return <div className={`max-w-7xl mx-auto px-4 ${className}`}>{children}</div>;
}

export default function PageContent() {
  return (
    <div className="w-full">
      {/* ShopCards */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-14">
          {shopCards.map((card) => (
            <div
              key={card.id}
              className="flex border border-[#ECECEC] p-4 justify-between w-full min-h-[190px] overflow-hidden"
            >
              <div className="flex flex-col gap-2 justify-center">
                <h6 className="font-normal text-sm">{card.tag}</h6>
                <h2 className="font-bold text-2xl">{card.title}</h2>

                {/* CTA -> Shop */}
                <Link to={card.link || "/shop"} className="font-normal text-xs text-[#23A6F0]">
                  {card.cta}
                </Link>
              </div>

              <img
                src={resolveImage(card.img)}
                className="w-[45%] max-h-[170px] object-contain self-end"
                alt={card.title}
              />
            </div>
          ))}
        </div>
      </Container>

      {/* Bestseller (tek kez) */}
      <Container>
        <div className="py-16 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8">
          <div
            className="border border-[#8EC2F2] w-full lg:w-[400px] bg-cover bg-center py-6 pr-6 pl-12 flex flex-col gap-[5px]"
            style={{
              backgroundImage: `url(${images["barista-drink.jpg"]})`,
            }}
          >
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 p-8">
              <h6 className="text-xs font-bold uppercase">
                Furniture
              </h6>

              <p className="text-sm mt-1">
                5 Items
              </p>

              <Link
                to="/shop"
                className="inline-block mt-3 text-sm font-bold"
              >
                Explore Items →
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap gap-2.5 items-center border-b-2 border-[#ECECEC]">
              <h3 className="font-bold text-base mr-2">Bestseller Products</h3>

              {bestSellerTabs.map((tab) => (
                <h6 key={tab} className="text-sm text-gray-600">
                  {tab}
                </h6>
              ))}

              <div className="flex py-3.5 px-5 ml-auto">
                <div className="border rounded-[34px] border-[#BDBDBD]">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div className="border rounded-[34px] border-[#BDBDBD] ml-2">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10 mt-6">
              {bestSellerProducts.slice(0, 6).map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col items-center text-center gap-2 py-2"
                >
                  <div className="h-40 w-full flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                    <img
                      src={resolveImage(product.img)}
                      className="max-h-full object-contain"
                      alt={product.name}
                    />
                  </div>

                  <div className="space-y-1">
                    <h5 className="font-bold">{product.name}</h5>

                    <Link
                      to="/shop"
                      className="text-sm text-gray-500 hover:underline"
                    >
                      {product.category}
                    </Link>

                    <div className="flex justify-center gap-2">
                      <span className="text-[#BDBDBD] font-bold">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                      <span className="text-[#23856D] font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/shop"
                className="inline-block bg-[#23A6F0] text-white font-bold px-6 py-3 rounded !text-white"
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
                <div
                  key={product.id}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div className="w-full h-44 flex items-center justify-center overflow-hidden">
                    <img
                      src={resolveImage(product.img)}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <h5 className="font-bold text-sm">
                    {product.name}
                  </h5>

                  <Link
                    to="/shop"
                    className="text-xs text-gray-500 hover:underline"
                  >
                    {product.category}
                  </Link>

                  <div className="flex justify-center gap-2 text-sm">
                    <span className="text-[#BDBDBD] font-bold">
                      ${Number(product.oldPrice || 0).toFixed(2)}
                    </span>

                    <span className="text-[#23856D] font-bold">
                      ${Number(product.price || 0).toFixed(2)}
                    </span>
                  </div>
                </div>
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
                Furniture
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
        <div className="py-16 flex flex-wrap gap-14 items-center justify-center">
          {[
            "hooli",
            "lyft",
            "meta",
            "stripe",
            "aws",
            "reddit",
          ].map((logo) => (
            <div key={logo} className="clients-item">
              <img
                src={images[`${logo}.png`]}
                alt={logo}
                className="max-w-32 max-h-14 object-contain grayscale opacity-70"
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
