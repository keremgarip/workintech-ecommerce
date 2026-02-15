import {Link} from "react-router-dom";

export default function OrderSuccess() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold">🎉 Siparişiniz alındı!</h1>
            <p className="text-gray-600 mt-3">
                Siparişiniz başarıyla oluşturuldu. Teşekkürler!
            </p>
            <div className="mt-8 flex gap-3 justify-center">
                <Link to="/shop" className="px-6 py-3 rounded bg-[#23A6F0] text-white font-bold">
                    Alışverişe Devam
                </Link>
                <Link to="/orders" className="px-6 py-3 rounded border border-gray-200 font-bold">
                    Siparişlerim
                </Link>
            </div>
        </div>
    )
}