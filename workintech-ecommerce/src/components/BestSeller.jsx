import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BestSeller() {
    return (
        <div className="px-2 py-4 flex">
            <div className="bestseller-left">
                <div className="bestseller-bg"></div>
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
                <div className="flex gap-[30px] py-2">
                    <div className="justify-items-center">
                        <img src="" alt="Ice Cream" />
                        <div className="gap-2.5">
                            <h5 className="font-bold">Ice Cream</h5>
                            <a href="#">Frozen Products</a>
                            <div className="flex gap-[5px]">
                                <h5 className="text-[#BDBDBD]">$16.48</h5>
                                <h5 className="text-[#23856D]">$6.48</h5>
                            </div>
                        </div>
                    </div>
                    <div className="justify-items-center">
                        <img src="" alt="Apple" />
                        <div className="gap-2.5">
                            <h5 className="font-bold">Apple</h5>
                            <a href="#">Fruit Products</a>
                            <div className="flex gap-[5px]">
                                <h5 className="text-[#BDBDBD]">$16.48</h5>
                                <h5 className="text-[#23856D]">$6.48</h5>
                            </div>
                        </div>
                    </div>
                    <div className="justify-items-center">
                        <img src="" alt="Steak" />
                        <div className="gap-2.5">
                            <h5 className="font-bold">Steak</h5>
                            <a href="#">Meat Products</a>
                            <div className="flex gap-[5px]">
                                <h5 className="text-[#BDBDBD]">$16.48</h5>
                                <h5 className="text-[#23856D]">$6.48</h5>
                            </div>
                        </div>
                    </div>
                    <div className="justify-items-center">
                        <img src="" alt="Ice Cream" />
                        <div className="gap-2.5">
                            <h5 className="font-bold">Ice Cream</h5>
                            <a href="#">Frozen Products</a>
                            <div className="flex gap-[5px]">
                                <h5 className="text-[#BDBDBD]">$16.48</h5>
                                <h5 className="text-[#23856D]">$6.48</h5>
                            </div>
                        </div>
                    </div>
                    <div className="justify-items-center">
                        <img src="" alt="Apple" />
                        <div className="gap-2.5">
                            <h5 className="font-bold">Apple</h5>
                            <a href="#">Fruit Products</a>
                            <div className="flex gap-[5px]">
                                <h5 className="text-[#BDBDBD]">$16.48</h5>
                                <h5 className="text-[#23856D]">$6.48</h5>
                            </div>
                        </div>
                    </div>
                    <div className="justify-items-center">
                        <img src="" alt="Steak" />
                        <div className="gap-2.5">
                            <h5 className="font-bold">Steak</h5>
                            <a href="#">Meat Products</a>
                            <div className="flex gap-[5px]">
                                <h5 className="text-[#BDBDBD]">$16.48</h5>
                                <h5 className="text-[#23856D]">$6.48</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}