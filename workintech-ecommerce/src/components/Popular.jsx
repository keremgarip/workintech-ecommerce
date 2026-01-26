export default function Popular() {
    return (
        <div className="px-2 py-12">
            <section className="flex">
                <div className="popular-left">
                    <img src="" alt="Delivery" />
                </div>
                <div className="text-center">
                    <h5 className="font-bold text-2xl">MOST POPULAR</h5>
                    <p className="text-sm">Discover the benefits of choosing our products for your needs.</p>
                    <img src="" alt="Stew Meat" />
                    <a href="#" className="text-sm">Meat Products</a>
                    <div className="flex gap-[5px] justify-center">
                        <h5 className="text-[#BDBDBD]">$16.48</h5>
                        <h5 className="text-[#23856D]">$6.48</h5>
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
    )
}