import React from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, ListChecks, ChevronDown } from "lucide-react";

export default function Shop() {
    return (
        <main className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex items-end justify-between mb-6 py-6">
                    <h1 className="text-3xl font-bold">Shop</h1>
                </div>
                <div>
                    <div className="categories">
                        <div className="pb-12 flex gap-16 text-white">
                            <div className="w-[200px] h-[200px] bg-cover bg-center flex flex-col items-center justify-center gap-[5px]" style={{ backgroundImage: "url('src/assets/donuts.jpg')" }}>
                                <h4 className="text-xl font-bold">FRUITS</h4>
                                <p className="text-sm font-semibold">200 items</p>
                            </div>
                            <div className="w-[200px] h-[200px] bg-cover bg-center flex flex-col items-center justify-center gap-[5px]" style={{ backgroundImage: "url('src/assets/donuts.jpg')" }}>
                                <h4 className="text-xl font-bold">VEGETABLES</h4>
                                <p className="text-sm font-semibold">200 items</p>
                            </div>
                            <div className="w-[200px] h-[200px] bg-cover bg-center flex flex-col items-center justify-center gap-[5px]" style={{ backgroundImage: "url('src/assets/donuts.jpg')" }}>
                                <h4 className="text-xl font-bold">DAIRY PRODUCTS</h4>
                                <p className="text-sm font-semibold">200 items</p>
                            </div>
                            <div className="w-[200px] h-[200px] bg-cover bg-center flex flex-col items-center justify-center gap-[5px]" style={{ backgroundImage: "url('src/assets/donuts.jpg')" }}>
                                <h4 className="text-xl font-bold">SNACKS</h4>
                                <p className="text-sm font-semibold">200 items</p>
                            </div>
                            <div className="w-[200px] h-[200px] bg-cover bg-center flex flex-col items-center justify-center gap-[5px]" style={{ backgroundImage: "url('src/assets/donuts.jpg')" }}>
                                <h4 className="text-xl font-bold">DRINKS</h4>
                                <p className="text-sm font-semibold">200 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 flex justify-between">
                        <h6 className="text-lg text-[#737373] font-bold">Showing 1-12 of 200 results</h6>
                        <div className="px-[1px] flex gap-[15px] items-center">
                            <h6 className="text-lg font-bold">Views:</h6>
                            <div className="p-2 border border-[#ECECEC] rounded-[5px] cursor-pointer">
                                <LayoutGrid className="w-5 h-5 text-gray-700" />
                            </div>
                            <div className="p-2 border border-[#ECECEC] rounded-[5px] cursor-pointer">
                                <ListChecks className="w-5 h-5 text-gray-700" />
                            </div>
                        </div>
                        <div className="flex gap-[15px] font-base">
                            <div className="p-4 bg-[#F9F9F9] flex border rounded-[5px] border-[#DDDDDD]">
                                <p className="font-base bg-[#F9F9F9]">Popularity</p>
                                <ChevronDown />
                            </div>
                            <p className="font-bold bg-[#23A6F0] rounded-[5px] py-2.5 px-5">Filter</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 text-center">
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex gap-[30px] py-2 content-center">
                        <Link to="/product" className="block">
                            <div className="flex flex-col items-center">
                                <img src="src\assets\ice-cream.png" alt="Ice Cream" className="w-52" />
                                <div className="gap-2.5">
                                    <h5 className="font-bold">Ice Cream</h5>
                                    <a href="#">Frozen Products</a>
                                    <div className="flex gap-[5px]">
                                        <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                                        <h5 className="text-[#23856D] font-bold">$6.48</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <div className="inline-flex overflow-hidden rounded-lg border border-gray-300">
                    <button className="px-6 py-3 text-gray-400 bg-gray-100 cursor-not-allowed">
                        First
                    </button>

                    <button className="px-4 py-3 text-[#23A6F0]">1</button>
                    <button className="px-4 py-3 text-[#23A6F0]">2</button>
                    <button className="px-4 py-3 text-[#23A6F0]">3</button>

                    <button className="px-6 py-3 text-[#23A6F0]">Next</button>
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