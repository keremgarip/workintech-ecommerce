import { shopCards, bestSellerTabs, bestSellerProducts, benefits, allProducts, clients, blogPosts } from "../data/home.data.js";

import { ChevronLeft, ChevronRight, Calendar, MessageCircleMore, Download } from "lucide-react";

function Container({ children, className = "" }) {
    return (
        <div className={`max-w-7xl mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
}

export default function PageContent() {
    return (
        <div className="w-full">
            {/* ShopCards */}
            <Container>
                <div className="flex justify-around px-2 py-20 gap-4">
                    {shopCards.map((card) => (
                        <div key={card.id} className="flex border border-[#ECECEC] p-4 justify-between">
                            <div className="flex flex-col gap-2 justify-center">
                                <h6 className="font-normal text-sm">{card.tag}</h6>
                                <h2 className="font-bold text-2xl">{card.title}</h2>
                                <h6 className="font-normal text-xs">{card.cta}</h6>
                            </div>
                            <img src={card.img} className="max-w-[200px]" alt={card.title} />
                        </div>
                    ))}
                </div>
            </Container>
            {/* Bestseller */}
            <Container>
                <div className="px-2 py-12 flex justify-center gap-7.5">
                    <div className="border border-[#8EC2F2] h-[800px] w-[400px] bg-cover bg-center py-6 pr-6 pl-12 flex flex-col gap-[5px]" style={{ backgroundImage: "url('src/assets/barista-drink.jpg')" }}>
                        <h6 className="text-sm font-bold">ALL PRODUCTS</h6>
                        <h6 className="text-sm font-bold">200 items</h6>
                    </div>
                    <div className="flex-col">
                        <div className="flex gap-2.5 items-center border-b-2 border-[#ECECEC]">
                            <h3 className="font-bold text-base">Bestseller Products</h3>
                            {bestSellerTabs.map((tab) => (
                                <h6 key={tab} className="text-sm">{tab}</h6>
                            ))}
                            <div className="flex py-3.5 px-5">
                                <div className="border rounded-[34px] border-[#BDBDBD]"><ChevronLeft className="w-5 h-5" /></div>
                                <div className="border rounded-[34px] border-[#BDBDBD]"><ChevronRight className="w-5 h-5" /></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {bestSellerProducts.map((product) => (
                                <div key={product.id} className="flex flex-col items-center text-center gap-2 py-2">
                                    <div className="h-40 w-full flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                                        <img src={product.img} className="max-h-full object-contain" alt={product.name} />
                                    </div>
                                    <div className="space-y-1">
                                        <h5 className="font-bold">{product.name}</h5>
                                        <a href="#" className="text-sm text-gray-500 hover:underline">{product.category}</a>
                                        <div className="flex justify-center gap-2">
                                            <span className="text-[#BDBDBD] font-bold">${product.oldPrice.toFixed(2)}</span>
                                            <span className="text-[#23856D] font-bold">${product.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            {/* Popular */}
            <Container>
                <div className="px-2 py-12">
                    <section className="flex justify-center gap-5">
                        <div className="popular-left">
                            <img src="src\assets\meat-fire.jpg" className="max-w-[674px]" alt="Delivery" />
                        </div>
                        <div className="text-center flex flex-col gap-3 justify-center items-center">
                            <h5 className="font-bold text-2xl">MOST POPULAR</h5>
                            <p className="text-sm">Discover the benefits of choosing our products for your needs.</p>
                            <img src="src\assets\raw-meat.png" className="h-80" alt="Stew Meat" />
                            <a href="#" className="text-sm">Meat Products</a>
                            <div className="flex gap-[5px] justify-center">
                                <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                <h5 className="text-[#23856D] font-bold">$6.48</h5>
                            </div>
                        </div>
                    </section>
                    {/* Popular Benefits*/}
                    <section className="mt-2.5 flex">
                        {benefits.map((benefit) => (
                            <div key={benefit.id} className="flex p-6 gap-5">
                                <h2 className="font-bold text-[40px] text-[#E74040]">{benefit.id}.</h2>
                                <div>
                                    <h6 className="font-bold text-sm">{benefit.title}</h6>
                                    <p className="text-xs">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </Container>
            <Container>
                <div className="px-2 py-12 flex justify-center gap-7.5">
                    <div className="flex-col">
                        <div className="flex gap-2.5 items-center border-b-2 border-[#ECECEC]">
                            <h3 className="font-bold text-base">Bestseller Products</h3>
                            {bestSellerTabs.map((tab) => (
                                <h6 key={tab} className="text-sm">{tab}</h6>
                            ))}
                            <div className="flex py-3.5 px-5">
                                <div className="border rounded-[34px] border-[#BDBDBD]"><ChevronLeft className="w-5 h-5" /></div>
                                <div className="border rounded-[34px] border-[#BDBDBD]"><ChevronRight className="w-5 h-5" /></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-2">
                            {bestSellerProducts.map((product) => (
                                <div key={product.id} className="flex flex-col items-center text-center gap-2">
                                    <div className="h-40 w-full flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
                                        <img src={product.img} className="max-h-full object-contain" alt={product.name} />
                                    </div>
                                    <div className="space-y-1">
                                        <h5 className="font-bold">{product.name}</h5>
                                        <a href="#" className="text-sm text-gray-500 hover:underline">{product.category}</a>
                                        <div className="flex justify-center gap-2">
                                            <span className="text-[#BDBDBD] font-bold">${product.oldPrice.toFixed(2)}</span>
                                            <span className="text-[#23856D] font-bold">${product.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bestseller-left">
                        <div className="border border-[#8EC2F2] h-[800px] w-[400px] bg-cover bg-center py-6 pr-6 pl-12 flex flex-col gap-[5px]" style={{ backgroundImage: "url('src/assets/donuts.jpg')" }}>
                            <h6 className="text-sm font-bold">ALL PRODUCTS</h6>
                            <h6 className="text-sm font-bold">200 items</h6>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Most Popular */}
            <Container>
                <div className="flex py-12 justify-center gap-5">
                    <div className="text-center flex flex-col gap-3 justify-center items-center">
                        <h5 className="font-bold text-2xl">MOST POPULAR</h5>
                        <p className="text-[#737373]">Enjoy our most popular products with exclusive deals and discounts.</p>
                        <img src="src\assets\cashew.png" className="h-80" alt="Caramel Cashew" />
                        <a href="#">Snack Products</a>
                        <div className="flex gap-[10px]">
                            <Download />
                            <h6 className="font-bold text-sm">120 Sales</h6>
                        </div>
                        <div className="flex gap-[5px]">
                            <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                            <h5 className="text-[#23856D] font-bold">$6.48</h5>
                        </div>
                        <div className="product-colors"></div>
                    </div>
                    <div className="popular-right">
                        <img src="src\assets\dinner.jpg" className="max-h-[800px]" alt="Delivery" />
                    </div>
                </div>
            </Container>
            {/* All Products */}
            <Container>
                <div className="px-2 py-12">
                    <h3 className="font-bold text-2xl border-b-2 border-[#ECECEC]">BESTSELLER PRODUCTS</h3>
                    <div className="flex gap-[30px] justify-center mt-4">
                        {allProducts.map((product) => (
                            <div key={product.id} className="flex flex-col items-center text-center gap-2">
                                <div className="h-64 w-full max-w-[240px] flex items-center justify-center bg-white rounded-xl overflow-hidden">
                                    <img src={product.img} alt={product.name} className="max-h-full object-contain" />
                                </div>

                                <h5 className="font-bold text-base">{product.name}</h5>
                                <a href="#" className="text-sm text-gray-500 hover:underline">{product.category}</a>

                                <div className="flex gap-2">
                                    <span className="text-[#BDBDBD] font-bold">${product.oldPrice.toFixed(2)}</span>
                                    <span className="text-[#23856D] font-bold">${product.price.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            {/* Clients */}
            <Container>
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
            </Container>
            {/* Blogs */}
            <Container>
                <div className="px-2 py-28">
                    <h6 className="font-bold text-sm text-[#23A6F0] text-center">Practice Advice</h6>
                    <h2 className="font-bold text-[40px] text-center">Featured Posts</h2>
                    <div className="flex gap-[30px]">
                        {blogPosts.map((p) => (
                            <div key={p.id} className="border border-[#ECECEC] bg-white">
                                <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />

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
                                        <a href="#" className="hover:underline">Read More</a>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}