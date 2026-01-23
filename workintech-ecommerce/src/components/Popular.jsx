export default function Popular() {
    return (
        <div className="popular-container">
            <section className="popular-main">
                <div className="popular-left">
                    <img src="" alt="Delivery" />
                </div>
                <div className="popular-right">
                    <h5>MOST POPULAR</h5>
                    <p>Discover the benefits of choosing our products for your needs.</p>
                    <img src="" alt="Stew Meat"/>
                    <a href="#">Meat Products</a>
                    <div className="price">
                        <h5>$16.48</h5>
                        <h5>$6.48</h5>
                    </div>
                </div>
            </section>
            <section className="popular-benefits">
                <div className="benefit-matter">
                    <h2 className="benefit-number">1.</h2>
                    <div className="benefit-content">
                        <h6>Easy to use</h6>
                        <p>Our products are designed with user-friendliness in mind, ensuring a seamless experience.</p>
                    </div>
                </div>
                <div className="benefit-matter">
                    <h2 className="benefit-number">2.</h2>
                    <div className="benefit-content">
                        <h6>Fast delivery</h6>
                        <p>Get your products delivered quickly and efficiently, saving you time and effort.</p>
                    </div>
                </div>
                <div className="benefit-matter">
                    <h2 className="benefit-number">3.</h2>
                    <div className="benefit-content">
                        <h6>Quality products</h6>
                        <p>We ensure all our products meet the highest quality standards, providing you with reliable and durable items.</p>
                    </div>
                </div>
                <div className="benefit-matter">
                    <h2 className="benefit-number">4.</h2>
                    <div className="benefit-content">
                        <h6>Non-stop service</h6>
                        <p>We offer 24/7 support to ensure you never face any issues with our products or services.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}