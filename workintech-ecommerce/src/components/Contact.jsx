import {locations} from "../data/home.data.js"

export default function Contact() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <section className="relative w-full h-[640px] bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('src/assets/knife.jpg')" }}>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex justify-center gap-60 w-full">
                            <div className="text-left flex flex-col gap-9">
                                <h2 className="font-bold text-5xl">CONTACT US</h2>
                                <p className="font-semibold text-base w-[360px]">Have a question, suggestion, or need support? We’re here to help!
                                    Feel free to reach out to us, and we’ll get back to you as soon as possible.</p>
                                <p className="py-[15px] px-10 bg-[#23A6F0] text-white rounded-[5px] w-[200px] text-center font-bold text-sm">CONTACT US</p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-16 gap-y-14">
                                {locations.map((item) => (
                                    <div key={item.id} className="flex flex-col gap-4">
                                        <h3 className="font-bold text-xl">{item.city}</h3>

                                        <h4 className="border-b-2 border-b-[#23A6F0] font-semibold">
                                            {item.mall}
                                        </h4>

                                        <h5 className="font-bold text-sm">{item.address}</h5>

                                        <h5 className="font-bold text-sm">
                                            Phone: {item.phone}
                                        </h5>

                                        <h5 className="font-bold text-sm">
                                            Fax: {item.fax}
                                        </h5>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}