import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export default function OrderSummaryBox({ cart = [] }) {
    const [discount, setDiscount] = useState(0);
    const shipping = 29.99;

    const productsTotal = useMemo(() => {
        return cart
            .filter((i) => i.checked)
            .reduce((sum, i) => sum + (Number(i.product.price) || 0) * i.count, 0);
    }, [cart]);

    const grandTotal = Math.max(0, productsTotal + shipping - Number(discount || 0));

    return (
        <div className="w-full md:w-[360px] border border-gray-200 rounded bg-white">
            <div className="p-4 border-b border-gray-200">
                <Link
                    to="/create-order"
                    className="block text-center bg-[#F57C00] text-white font-bold py-3 rounded"
                >
                    Sepeti Onayla &gt;
                </Link>
            </div>

            <div className="p-5">
                <h3 className="font-bold mb-4">Sipariş Özeti</h3>

                <div className="space-y-3 text-sm">
                    <Row label="Ürünler Toplamı" value={`₺ ${productsTotal.toFixed(2)}`} />
                    <Row label="Kargo Toplamı" value={`₺ ${shipping.toFixed(2)}`} />
                    <Row label="İndirim" value={`- ₺ ${Number(discount || 0).toFixed(2)}`} />
                    <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                        <span>Toplam</span>
                        <span>₺ {grandTotal.toFixed(2)}</span>
                    </div>
                </div>
                <div className="mt-4">
                    <input
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        className="w-full border border-gray-200 rounded px-3 py-2"
                        placeholder="İndirim kodu / tutar" />
                </div>
                <div className="p-4 border-t border-gray-200 mt-5">
                    <Link
                        to="/create-order"
                        className="block text-center bg-[#F57C00] text-white font-bold py-3 rounded">
                            Create Order &gt;
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Row({label, value}) {
    return (
        <div className="flex justify-between">
            <span className="text-gray-600">{label}</span>
            <span className="font-semibold">{value}</span>
        </div>
    )
}