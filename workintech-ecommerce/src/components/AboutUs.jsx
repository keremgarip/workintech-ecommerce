import Contact from "./Contact";
import Team from "./Team";

export default function AboutUs() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex justify-between items-center py-28 gap-20">
                    <div className="flex flex-col gap-9">
                        <h5 className="font-semibold">ABOUT COMPANY</h5>
                        <h1 className="font-bold">ABOUT US</h1>
                        <h4 className="text-sm font-semibold">We’re a passionate team creating simple, smart solutions that make everyday life easier and more enjoyable.</h4>
                        <p className="py-[15px] px-10 bg-[#23A6F0] text-white rounded-[5px] w-[200px] text-center font-bold text-sm">Get Quote Now</p>
                    </div>
                    <div className="">
                        <img src="src\assets\shop.jpg" alt="Shop" className="max-w-[540px]" />
                    </div>
                </div>
                <div className="flex justify-evenly items-center py-6 gap-15">
                    <div className="flex flex-col gap-6">
                        <p className="text-[#E74040] font-semibold">Problems trying</p>
                        <h3 className="font-bold text-xl max-w-[400px]">Quality products. Honest pricing. A shopping experience you can trust.</h3>
                    </div>
                    <div>
                        <p className="text-[#737373] w-[540px]">Quality products. Honest pricing. A shopping experience you can trust.</p>
                    </div>
                </div>
                <div className="flex justify-between gap-12.5 py-20">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-6xl">15K</h1>
                        <h5 className="font-bold text-base text-[#737373]">Happy Customers</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-6xl">150K</h1>
                        <h5 className="font-bold text-base text-[#737373]">Monthly Visitors</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-6xl">15</h1>
                        <h5 className="font-bold text-base text-[#737373]">Countries Worldwide</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-6xl">100+</h1>
                        <h5 className="font-bold text-base text-[#737373]">Top Partners</h5>
                    </div>
                </div>
                <div>
                    Video
                </div>
                <div>
                    <Team />
                </div>
                <div className="py-20">
                    <h2 className="font-bold text-4xl text-center">Trusted by Leading Brands</h2>
                    <p className="text-center mt-5 font-semibold">We use trusted technologies and partners to deliver safe payments and reliable service.</p>
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
                </div>
                <div className="flex justify-between py-2 gap-20">
                    <Contact />
                </div>
            </div>
        </div>
    )
}