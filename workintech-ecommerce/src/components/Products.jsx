import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Products() {
    return (
        <div className="px-2 py-12 flex">
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
                <div className="flex gap-[30px] py-2">
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
                <div className="border border-[#8EC2F2] h-[800px] w-[400px] bg-cover bg-center" style={{backgroundImage: "url('src/assets/donuts.jpg')"}}>
                <h6 className="text-sm font-bold">ALL PRODUCTS</h6>
                <h6 className="text-sm font-bold">200 items</h6>
                </div>
            </div>
        </div>
    )
}