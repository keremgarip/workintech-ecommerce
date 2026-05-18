import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "../api/cartApi";

export default function CartPage() {
  const userId = Number(localStorage.getItem("userId"));
  const [cart, setCart] = useState(null);

  const loadCart = async () => {
    if(!userId) {
      console.warn("User not logged in");
      setCart({ items: [], totalPrice: 0});
      return;
    }
    const data = await getCart(userId)
    console.log("Cart page data:", data);
    setCart(data);
};

  useEffect(() => {
    loadCart();
  }, []);

  const increase = async (item) => {
    await updateCartItem(userId, item.productId, item.quantity + 1);
    loadCart();
  };

  const decrease = async (item) => {
    await updateCartItem(userId, item.productId, item.quantity - 1);
    loadCart();
  };

  const remove = async (productId) => {
    await removeCartItem(userId, productId);
    loadCart();
  };

  const clear = async () => {
    await clearCart(userId);
    loadCart();
  };

  if (!cart) return <p className="p-6">Loading cart...</p>;

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Sepetim</h1>

      {cart.items.length === 0 ? (
        <p>Sepet boş.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="border rounded p-4 flex justify-between items-center"
              >
                <div>
                  <h2 className="font-bold">{item.productName}</h2>
                  <p>₺ {Number(item.price).toFixed(2)}</p>
                  <p>Toplam: ₺ {Number(item.lineTotal).toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => decrease(item)} className="px-3 py-1 border">
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increase(item)} className="px-3 py-1 border">
                    +
                  </button>

                  <button
                    onClick={() => remove(item.productId)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={clear}
              className="px-4 py-2 border rounded"
            >
              Sepeti Temizle
            </button>

            <div className="text-right">
              <p className="text-xl font-bold">
                Genel Toplam: ₺ {Number(cart.totalPrice).toFixed(2)}
              </p>

              <Link
                to="/checkout"
                className="inline-block mt-3 px-6 py-3 bg-[#23A6F0] text-white rounded font-bold"
              >
                Siparişi Tamamla
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
