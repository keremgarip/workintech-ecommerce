import { Link } from "react-router-dom";
import { useMemo, useState } from "react";

export default function OrderSummaryBox({
  cart = [],
  showActions = true,
}) {
  const [discount, setDiscount] = useState("");
  const shipping = 29.99;

  const selectedItems = useMemo(() => {
    if (!Array.isArray(cart)) {
      return [];
    }

    if (!showActions) {
      return cart;
    }

    return cart.filter((item) => item.checked === true);
  }, [cart, showActions]);

  console.log("OrderSummary cart:", cart);
console.log("OrderSummary selectedItems:", selectedItems);

  const productsTotal = useMemo(() => {
    const toNumber = (value) => {
      const normalized = String(value ?? "")
        .replace("₺", "")
        .replace(/\s/g, "")
        .replace(",", ".");

      const number = parseFloat(normalized);

      return Number.isFinite(number) ? number : 0;
    };

    return selectedItems.reduce((sum, item) => {
      const price = toNumber(
        item.product?.price ??
        item.price ??
        item.unitPrice
      );

      const count = toNumber(
        item.count ??
        item.quantity ??
        item.amount ??
        1
      );

      return sum + price * count;
    }, 0);
  }, [selectedItems]);

  const hasSelected = selectedItems.length > 0;

  const discountValue = useMemo(() => {
    const normalized = String(discount ?? "")
      .replace("₺", "")
      .replace(/\s/g, "")
      .replace(",", ".");

    const number = parseFloat(normalized);

    return Number.isFinite(number) ? number : 0;
  }, [discount]);

  const shippingTotal = hasSelected ? shipping : 0;

  const grandTotal = Math.max(
    0,
    productsTotal + shippingTotal - discountValue
  );

  return (
    <div className="w-full md:w-[360px] border border-gray-200 rounded bg-white">
      <div className="p-5">
        <h3 className="font-bold mb-4">
          Sipariş Özeti
        </h3>

        <div className="space-y-3 text-sm">
          <Row
            label="Ürünler Toplamı"
            value={`₺ ${productsTotal.toFixed(2)}`}
          />

          <Row
            label="Kargo Toplamı"
            value={`₺ ${shippingTotal.toFixed(2)}`}
          />

          <Row
            label="İndirim"
            value={`- ₺ ${discountValue.toFixed(2)}`}
          />

          <div className="border-t pt-3 mt-3 flex justify-between font-bold">
            <span>Toplam</span>
            <span>₺ {grandTotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-4">
          <input
            value={discount}
            onChange={(event) =>
              setDiscount(event.target.value)
            }
            className="w-full border border-gray-200 rounded px-3 py-2"
            placeholder="İndirim kodu / tutar"
          />
        </div>

        {showActions && (
          <div className="p-4 border-t border-gray-200 mt-5">
            <Link
              to="/create-order"
              className="block text-center bg-[#F57C00] text-white font-bold py-3 rounded !text-white"
            >
              Sepeti Onayla &gt;
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>
    </div>
  );
}
