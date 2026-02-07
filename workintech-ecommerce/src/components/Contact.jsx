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
                                <div className="flex flex-col gap-4">
                                    <h3 className="font-bold text-xl">Istanbul</h3>
                                    <h4 className="border-b-2 border-b-[#23A6F0] font-semibold">Emaar Square AVM</h4>
                                    <h5 className="font-bold text-sm">34700 Üsküdar</h5>
                                    <h5 className="font-bold text-sm">Phone: +90 (850) 290 80 90</h5>
                                    <h5 className="font-bold text-sm">Fax: +90 (216) 123 45 67</h5>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="font-bold text-xl">Ankara</h3>
                                        <h4 className="border-b-2 border-b-[#23A6F0] font-semibold">ANKAmall</h4>
                                        <h5 className="font-bold text-sm">06560 Yenimahalle</h5>
                                        <h5 className="font-bold text-sm">Phone: +90 (312) 541 12 12</h5>
                                        <h5 className="font-bold text-sm">Fax: +90 (312) 123 45 67</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="font-bold text-xl">Bursa</h3>
                                        <h4 className="border-b-2 border-b-[#23A6F0] font-semibold">Korupark</h4>
                                        <h5 className="font-bold text-sm">16160 Osmangazi</h5>
                                        <h5 className="font-bold text-sm">Phone: +90 (224) 242 35 35</h5>
                                        <h5 className="font-bold text-sm">Fax: +90 (224) 123 45 67</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-4">
                                        <h3 className="font-bold text-xl">Balıkesir</h3>
                                        <h4 className="border-b-2 border-b-[#23A6F0] font-semibold">Esas 10 Burda AVM</h4>
                                        <h5 className="font-bold text-sm">10100 Altıeylül</h5>
                                        <h5 className="font-bold text-sm">Phone: +90 (266) 266 10 10</h5>
                                        <h5 className="font-bold text-sm">Fax: +90 (266) 123 45 67</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}