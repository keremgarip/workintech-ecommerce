import { Link, useLocation } from "react-router-dom";

export default function OrderSuccess() {
  const location = useLocation();
  const orderNumber = location.state?.orderNumber;
  const totalAmount = location.state?.totalAmount;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">🎉 Siparişiniz alındı!</h1>

      <p className="text-gray-600 mt-3">
        Siparişiniz başarıyla oluşturuldu. Teşekkürler!
      </p>

      {orderNumber && (
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded p-4">
          <p className="font-semibold">Sipariş No: {orderNumber}</p>

          {totalAmount !== undefined && (
            <p className="font-bold mt-2">
              Toplam: ₺ {Number(totalAmount || 0).toFixed(2)}
            </p>
          )}
        </div>
      )}

      <div className="mt-8 flex gap-3 justify-center">
        <Link
          to="/shop"
          className="px-6 py-3 rounded bg-[#23A6F0] !text-white font-bold"
        >
          Alışverişe Devam
        </Link>

        <Link
          to="/orders"
          className="px-6 py-3 rounded border border-gray-200 font-bold !text-black"
        >
          Siparişlerim
        </Link>
      </div>
    </div>
  );
}