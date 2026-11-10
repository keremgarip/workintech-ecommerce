import { images } from "../utils/assets"
import Contact from "./Contact";
import Team from "./Team";

export default function AboutUs() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-16 lg:py-28 gap-10 lg:gap-20">
                    <div className="flex flex-col gap-6 lg:gap-9">
                        <h5 className="font-semibold">ABOUT COMPANY</h5>

                        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">
                            ABOUT US
                        </h1>

                        <h4 className="text-sm sm:text-base font-semibold leading-7 max-w-xl">
                            We’re a passionate team creating simple, smart solutions that make
                            everyday life easier and more enjoyable.
                        </h4>

                        <button
                            type="button"
                            className="py-3 px-6 bg-[#23A6F0] !text-white rounded-[5px] w-full sm:w-[200px] text-center font-bold text-sm"
                        >
                            Get Quote Now
                        </button>
                    </div>
                    <div>
                        <img
                            src={images["shop.jpg"]}
                            alt="Shop"
                            className="w-full max-w-[540px] mx-auto object-contain"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 py-8">
                    <div className="flex flex-col gap-4">
                        <p className="text-[#E74040] font-semibold">
                            Problems trying
                        </p>

                        <h3 className="font-bold text-xl sm:text-2xl max-w-[400px] leading-8">
                            Quality products. Honest pricing. A shopping experience you can trust.
                        </h3>
                    </div>
                    <div>
                        <p className="text-[#737373] max-w-[540px] leading-7">
                            Quality products. Honest pricing. A shopping experience you can trust.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 lg:py-20">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">15K</h1>
                        <h5 className="font-bold text-sm sm:text-base text-[#737373]">Happy Customers</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">150K</h1>
                        <h5 className="font-bold text-sm sm:text-base text-[#737373]">Monthly Visitors</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl">15</h1>
                        <h5 className="font-bold text-sm sm:text-base text-[#737373]">Countries Worldwide</h5>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-6xl">100+</h1>
                        <h5 className="font-bold text-sm sm:text-base text-[#737373]">Top Partners</h5>
                    </div>
                </div>
                <div className="py-16">
                    <div className="w-full aspect-video bg-[#FAFAFA] border border-[#ECECEC] rounded-lg flex items-center justify-center">
                        <span className="text-[#737373] font-semibold">
                            Video
                        </span>
                    </div>
                </div>
                <div>
                    <Team />
                </div>
                <div className="py-20">
                    <h2 className="font-bold text-3xl sm:text-4xl text-center">Trusted by Leading Brands</h2>
                    <p className="text-center mt-5 font-semibold">We use trusted technologies and partners to deliver safe payments and reliable service.</p>
                    <div className="py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        <div className="clients-item flex justify-center">
                            <img
                                src={images["hooli.png"]}
                                alt="Hooli"
                                className="max-w-[120px] max-h-14 object-contain"
                            />
                        </div>
                        <div className="clients-item flex justify-center">
                            <img
                                src={images["lyft.png"]}
                                alt="Lyft"
                                className="max-w-[120px] max-h-14 object-contain"
                            />
                        </div>
                        <div className="clients-item flex justify-center">
                            <img
                                src={images["meta.png"]}
                                alt="Meta"
                                className="max-w-[120px] max-h-14 object-contain"
                            />
                        </div>
                        <div className="clients-item flex justify-center">
                            <img
                                src={images["stripe.png"]}
                                alt="Stripe"
                                className="max-w-[120px] max-h-14 object-contain"
                            />
                        </div>
                        <div className="clients-item flex justify-center">
                            <img
                                src={images["aws.png"]}
                                alt="AWS"
                                className="max-w-[120px] max-h-14 object-contain"
                            />
                        </div>
                        <div className="clients-item flex justify-center">
                            <img
                                src={images["reddit.png"]}
                                alt="Reddit"
                                className="max-w-[120px] max-h-14 object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <Contact />
                </div>
            </div>
        </div>
    )
}