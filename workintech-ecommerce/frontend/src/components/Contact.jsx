import { useState } from "react";
import { locations } from "../data/home.data"
import { images } from "../utils/assets";

export default function Contact() {

    const [showForm, setShowForm] = useState(false);
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 py-10">
                <section className="relative w-full min-h-[640px] bg-cover bg-center overflow-hidden" style={{
                    backgroundImage: `url(${images["knife.jpg"]})`
                }}>
                    <div className="relative min-h-[640px] bg-white/75 lg:bg-white/40">
                        <div className="max-w-6xl mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-center min-h-[640px]">
                            <div className="text-left flex flex-col gap-6">
                                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">CONTACT US</h2>
                                <p className="font-semibold text-sm sm:text-base max-w-md leading-7">Have a question, suggestion, or need support? We’re here to help!
                                    Feel free to reach out to us, and we’ll get back to you as soon as possible.</p>
                                <button
                                    type="button"
                                    onClick={() => setShowForm(true)}
                                    className="py-3 px-6 bg-[#23A6F0] !text-white rounded-[5px] w-full sm:w-[200px] text-center font-bold text-sm"
                                >
                                    CONTACT US
                                </button>
                                {showForm && (
                                    <div
                                        className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
                                        onClick={() => setShowForm(false)}
                                    >
                                        <div
                                            className="bg-white w-full max-w-xl rounded-lg shadow-xl p-5 sm:p-6 max-h-[90vh] overflow-y-auto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="flex items-center justify-between mb-6">
                                                <h2 className="text-2xl font-bold">
                                                    Get in Touch
                                                </h2>

                                                <button
                                                    type="button"
                                                    onClick={() => setShowForm(false)}
                                                    className="text-gray-500 text-xl"
                                                >
                                                    ✕
                                                </button>
                                            </div>

                                            <form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    setShowForm(false);
                                                }}
                                                className="space-y-4"
                                            >
                                                <div>
                                                    <label className="block font-semibold mb-1">
                                                        Name
                                                    </label>
                                                    <input
                                                        required
                                                        className="w-full border border-[#DDDDDD] rounded px-4 py-3"
                                                        placeholder="Your name"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block font-semibold mb-1">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        required
                                                        className="w-full border border-[#DDDDDD] rounded px-4 py-3"
                                                        placeholder="name@example.com"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block font-semibold mb-1">
                                                        Message
                                                    </label>
                                                    <textarea
                                                        required
                                                        rows={5}
                                                        className="w-full border border-[#DDDDDD] rounded px-4 py-3"
                                                        placeholder="How can we help?"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    className="bg-[#23A6F0] !text-white font-bold px-6 py-3 rounded"
                                                >
                                                    Send Message
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                                {locations.map((item) => (
                                    <div key={item.id} className="flex flex-col gap-3 bg-white/85 rounded-lg p-4 shadow-sm">
                                        <h3 className="font-bold text-xl">{item.city}</h3>

                                        <h4 className="border-b-2 border-b-[#23A6F0] font-semibold pb-1">
                                            {item.mall}
                                        </h4>

                                        <h5 className="font-semibold text-sm leading-6">{item.address}</h5>

                                        <h5 className="font-semibold text-sm">
                                            Phone: {item.phone}
                                        </h5>

                                        <h5 className="font-semibold text-sm">
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