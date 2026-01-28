import { ChevronLeft, ChevronRight, Calendar, MessageCircleMore, Download } from "lucide-react";

export default function PageContent() {
    return (
        <div className="pagecontent-container">
            <div className="flex justify-around px-2 py-20 gap-4">
                <div className="flex border border-[#ECECEC]">
                    <div className="flex flex-col gap-2 justify-around">
                        <h6 className="font-normal text-sm">New Arrival</h6>
                        <h2 className="font-bold text-2xl">Ice Cream</h2>
                        <h6 className="font-normal text-xs">Explore Items</h6>
                    </div>
                    <div className="shopCardRight">
                        <img src="src/assets/ice-cream.png" className="max-w-[200px]" alt="Ice Cream" />
                    </div>
                </div>
                <div className="flex border border-[#ECECEC]">
                    <div className="flex flex-col gap-2 justify-around">
                        <h6 className="font-normal text-sm">Ends Today</h6>
                        <h2 className="font-bold text-2xl">Apple</h2>
                        <h6 className="font-normal text-xs">Explore Items</h6>
                    </div>
                    <div className="shopCardRight">
                        <img src="src/assets/apple.png" className="max-w-[200px]" alt="Apple" />
                    </div>
                </div>
                <div className="flex border border-[#ECECEC]">
                    <div className="flex flex-col gap-2 justify-around">
                        <h6 className="font-normal text-sm">Best Seller</h6>
                        <h2 className="font-bold text-2xl">Steak</h2>
                        <h6 className="font-normal text-xs">Explore Items</h6>
                    </div>
                    <div className="shopCardRight">
                        <img src="src/assets/steak.png" className="max-w-[200px]" alt="Steak" />
                    </div>
                </div>
            </div>
            <div className="px-2 py-12 flex justify-center gap-7.5">
                <div className="border border-[#8EC2F2] h-[800px] w-[400px] bg-cover bg-center" style={{ backgroundImage: "url('src/assets/barista-drink.jpg')" }}>
                    <h6 className="text-sm font-bold">ALL PRODUCTS</h6>
                    <h6 className="text-sm font-bold">200 items</h6>
                </div>
                <div className="flex-col">
                    <div className="flex gap-2.5 items-center">
                        <h3 className="font-bold text-base">Bestseller Products</h3>
                        <h6 className="text-sm">Frozen</h6>
                        <h6 className="text-sm">Fruits</h6>
                        <h6 className="text-sm">Meat Products</h6>
                        <div className="flex py-3.5 px-5">
                            <div className="border rounded-[34px] border-[#BDBDBD]"><ChevronLeft className="w-5 h-5" /></div>
                            <div className="border rounded-[34px] border-[#BDBDBD]"><ChevronRight className="w-5 h-5" /></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="justify-items-center">
                            <img src="src/assets/ice-cream.png" className="max-h-40" alt="Ice Cream" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Ice Cream</h5>
                                <a href="#">Frozen Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/apple.png" className="max-h-40" alt="Apple" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Apple</h5>
                                <a href="#">Fruit Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/steak.png" className="max-h-40" alt="Steak" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Steak</h5>
                                <a href="#">Meat Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/ice-cream.png" className="max-h-40" alt="Ice Cream" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Ice Cream</h5>
                                <a href="#">Frozen Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/apple.png" className="max-h-40" alt="Apple" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Apple</h5>
                                <a href="#">Fruit Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/steak.png" className="max-h-40" alt="Steak" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Steak</h5>
                                <a href="#">Meat Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                <section className="mt-2.5 flex">
                    <div className="flex p-6 gap-5">
                        <h2 className="font-bold text-[40px] text-[#E74040]">1.</h2>
                        <div className="benefit-content">
                            <h6 className="font-bold text-sm">Easy to use</h6>
                            <p className="text-xs">Our products are designed with user-friendliness in mind, ensuring a seamless experience.</p>
                        </div>
                    </div>
                    <div className="flex p-6 gap-5">
                        <h2 className="font-bold text-[40px] text-[#E74040]">2.</h2>
                        <div className="benefit-content">
                            <h6 className="font-bold text-sm">Fast delivery</h6>
                            <p className="text-xs">Get your products delivered quickly and efficiently, saving you time and effort.</p>
                        </div>
                    </div>
                    <div className="flex p-6 gap-5">
                        <h2 className="font-bold text-[40px] text-[#E74040]">3.</h2>
                        <div className="benefit-content">
                            <h6 className="font-bold text-sm">Quality products</h6>
                            <p className="text-xs">We ensure all our products meet the highest quality standards, providing you with reliable and durable items.</p>
                        </div>
                    </div>
                    <div className="flex p-6 gap-5">
                        <h2 className="font-bold text-[40px] text-[#E74040]">4.</h2>
                        <div className="benefit-content">
                            <h6 className="font-bold text-sm">Non-stop service</h6>
                            <p className="text-xs">We offer 24/7 support to ensure you never face any issues with our products or services.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="px-2 py-12 flex justify-center gap-7.5">
                <div className="flex-col">
                    <div className="flex gap-2.5 items-center">
                        <h3 className="font-bold text-base">Bestseller Products</h3>
                        <h6 className="text-sm">Frozen</h6>
                        <h6 className="text-sm">Fruits</h6>
                        <h6 className="text-sm">Meat Products</h6>
                        <div className="flex py-3.5 px-5">
                            <div className="border rounded-[34px] border-[#BDBDBD]"><ChevronLeft className="w-5 h-5" /></div>
                            <div className="border rounded-[34px] border-[#BDBDBD]"><ChevronRight className="w-5 h-5" /></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="justify-items-center">
                            <img src="src/assets/ice-cream.png" className="max-h-40" alt="Ice Cream" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Ice Cream</h5>
                                <a href="#">Frozen Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/apple.png" className="max-h-40" alt="Apple" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Apple</h5>
                                <a href="#">Fruit Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/steak.png" className="max-h-40" alt="Steak" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Steak</h5>
                                <a href="#">Meat Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/ice-cream.png" className="max-h-40" alt="Ice Cream" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Ice Cream</h5>
                                <a href="#">Frozen Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/apple.png" className="max-h-40" alt="Apple" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Apple</h5>
                                <a href="#">Fruit Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                        <div className="justify-items-center">
                            <img src="src/assets/steak.png" className="max-h-40" alt="Steak" />
                            <div className="gap-2.5">
                                <h5 className="font-bold">Steak</h5>
                                <a href="#">Meat Products</a>
                                <div className="flex gap-[5px]">
                                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bestseller-left">
                    <div className="border border-[#8EC2F2] h-[800px] w-[400px] bg-cover bg-center" style={{ backgroundImage: "url('src/assets/donuts.jpg')" }}>
                        <h6 className="text-sm font-bold">ALL PRODUCTS</h6>
                        <h6 className="text-sm font-bold">200 items</h6>
                    </div>
                </div>
            </div>
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
            <div className="bg-[#FAFAFA] px-2 py-12">
                <h3 className="font-bold text-2xl border-b-2 border-[#ECECEC]">BESTSELLER PRODUCTS</h3>
                <div className="flex gap-[30px] justify-center mt-4">
                    <div className="justify-items-center">
                        <img src="src\assets\carafe.png" alt="Carafe" className="max-h-64 max-w-[240px]" />
                        <h5 className="font-bold text-base">Carafe</h5>
                        <a href="#" className="text-sm">Kitchen Department</a>
                        <div className="flex gap-[5px]">
                            <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                            <h5 className="text-[#23856D] font-bold">$6.48</h5>
                        </div>
                    </div>
                    <div className="justify-items-center">
                        <img src="src\assets\cheese-tray.png" alt="Cheese Tray" className="max-h-64 max-w-[240px]" />
                        <h5 className="font-bold text-base">Cheese Tray</h5>
                        <a href="#" className="text-sm">Kitchen Department</a>
                        <div className="flex gap-[5px]">
                            <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                            <h5 className="text-[#23856D] font-bold">$6.48</h5>
                        </div>
                    </div>
                    <div className="justify-items-center">
                        <img src="src\assets\bleach.png" alt="Bleach" className="max-h-64 max-w-[240px]" />
                        <h5 className="font-bold text-base">Bleach</h5>
                        <a href="#" className="text-sm">Cleaning Department</a>
                        <div className="flex gap-[5px]">
                            <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                            <h5 className="text-[#23856D] font-bold">$6.48</h5>
                        </div>
                    </div>
                    <div className="justify-items-center">
                        <img src="src\assets\caramel-candy.png" alt="Caramel Candies" className="max-h-64 max-w-[240px]" />
                        <h5 className="font-bold text-base">Caramel Candies</h5>
                        <a href="#" className="text-sm">Grocery Department</a>
                        <div className="flex gap-[5px]">
                            <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                            <h5 className="text-[#23856D] font-bold">$6.48</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-2 py-[50px] flex gap-30 bg-[#FAFAFA] flex items-center justify-center">
                <div className="clients-item">
                    <img src="src\assets\client\hooli.png" alt="Hooli" className="max-w-40" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\client\lyft.png" alt="Lyft" className="max-w-40 max-h-15" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\client\meta.png" alt="Meta" className="max-w-40 max-h-18" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\client\stripe.png" alt="Stripe" className="max-w-40 max-h-13" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\client\aws.png" alt="Amazon Web Services" className="max-w-40 max-h-15" />
                </div>
                <div className="clients-item">
                    <img src="src\assets\client\reddit.png" alt="Reddit" className="max-w-40 max-h-18" />
                </div>
            </div>
            <div className="px-2 py-28">
                <h6 className="font-bold text-sm text-[#23A6F0] text-center">Practice Advice</h6>
                <h2 className="font-bold text-[40px] text-center">Featured Posts</h2>
                <div className="flex gap-[30px]">
                    <div className="blog-item">
                        <img src="src\assets\blog\avocado-egg.jpg" alt="Blog Post 1" className="max-h-90 max-w-90 ml-11" />
                        <div className="px-[25px] pt-[25px] pb-[35px]">
                            <ul className="flex gap-[15px] text-xs">
                                <li>Google</li>
                                <li>Trend</li>
                                <li>New</li>
                            </ul>
                            <h4 className="text-xl">How to Use Google Trends for Market Research</h4>
                            <p className="text-sm">Learn how to leverage Google Trends to gain insights into market behavior and consumer interests.</p>
                            <div className="flex text-xs py-[15px] justify-between">
                                <div className="flex">
                                    <Calendar className="w-4 h-4" />
                                    <span>22 April 2024</span>
                                </div>
                                <div className="flex">
                                    <MessageCircleMore className="w-4 h-4" />
                                    <span>10 comments</span>
                                </div>
                            </div>
                            <div className="flex gap-2.5">
                                <a href="#">Read More</a>
                                <ChevronRight />
                            </div>
                        </div>
                    </div>
                    <div className="blog-item">
                        <img src="src\assets\blog\sandwiches.jpg" alt="Blog Post 2" className="max-h-90 max-w-90 ml-11" />
                        <div className="px-[25px] pt-[25px] pb-[35px]">
                            <ul className="flex gap-[15px] text-xs">
                                <li>Google</li>
                                <li>Trend</li>
                                <li>New</li>
                            </ul>
                            <h4 className="text-xl">How to Use Google Trends for Market Research</h4>
                            <p className="text-sm">Learn how to leverage Google Trends to gain insights into market behavior and consumer interests.</p>
                            <div className="flex text-xs py-[15px] justify-between">
                                <div className="flex">
                                    <Calendar className="w-4 h-4" />
                                    <span>22 April 2024</span>
                                </div>
                                <div className="flex">
                                    <MessageCircleMore className="w-4 h-4" />
                                    <span>10 comments</span>
                                </div>
                            </div>
                            <div className="flex gap-2.5">
                                <a href="#">Read More</a>
                                <ChevronRight />
                            </div>
                        </div>
                    </div>
                    <div className="blog-item">
                        <img src="src\assets\blog\salad.jpg" alt="Blog Post 3" className="max-h-90 max-w-90 ml-11" />
                        <div className="px-[25px] pt-[25px] pb-[35px]">
                            <ul className="flex gap-[15px] text-xs">
                                <li>Google</li>
                                <li>Trend</li>
                                <li>New</li>
                            </ul>
                            <h4 className="text-xl">How to Use Google Trends for Market Research</h4>
                            <p className="text-sm">Learn how to leverage Google Trends to gain insights into market behavior and consumer interests.</p>
                            <div className="flex text-xs py-[15px] justify-between">
                                <div className="flex">
                                    <Calendar className="w-4 h-4" />
                                    <span>22 April 2024</span>
                                </div>
                                <div className="flex">
                                    <MessageCircleMore className="w-4 h-4" />
                                    <span>10 comments</span>
                                </div>
                            </div>
                            <div className="flex gap-2.5">
                                <a href="#">Read More</a>
                                <ChevronRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}