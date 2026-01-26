import { Download } from "lucide-react"

export default function MostPopular() {
    return (
        <div className="flex py-12">
            <div className="text-center">
                <h5 className="font-bold text-2xl">MOST POPULAR</h5>
                <p className="text-[#737373]">Enjoy our most popular products with exclusive deals and discounts.</p>
                <img src="" alt="Caramel Cashew" />
                <a href="#">Snack Products</a>
                <div className="flex gap-[10px]">
                    <Download />
                    <h6 className="font-bold text-sm">120 Sales</h6>
                </div>
                <div className="flex gap-[5px]">
                    <h5 className="text-[#BDBDBD] font-bold">$16.48</h5>
                    <h5 className="text-[#23856D] font-bold">$6.48</h5>
                </div>
                <div className="product-colors"></div>
            </div>
            <div className="popular-right">
                <img src="" alt="Delivery" />
            </div>
        </div>
    )
}