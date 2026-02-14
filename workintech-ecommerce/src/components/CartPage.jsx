import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, setCartItemCount, toggleCartItemChecked } from "../actions/shoppingCartHelpers";
import OrderSummaryBox from "./OrderSummaryBox";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.shoppingCart.cart) || [];

  const total = useMemo(() => {
    return cart
      .filter((i) => i.checked)
      .reduce((sum, i) => sum + (Number(i.product.price) || 0) * i.count, 0);
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6 items-start">
        {cart.map((item) => (
          <div key={item.product.id} className="border border-[#ECECEC] rounded p-4 flex items-center gap-4">
            <input
              type="checkbox"
              checked={!!item.checked}
              onChange={() => dispatch(toggleCartItemChecked(item.product.id))}
            />

            <img
              src={item.product.images?.[0]?.url}
              alt={item.product.name}
              className="w-20 h-20 object-cover rounded bg-gray-100"
            />

            <div className="flex-1">
              <div className="font-semibold">{item.product.name}</div>
              <div className="text-sm text-gray-600">₺ {item.product.price}</div>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="w-9 h-9 border border-[#ECECEC] rounded"
                onClick={() => dispatch(setCartItemCount(item.product.id, item.count - 1))}
              >
                -
              </button>
              <div className="w-10 text-center font-semibold">{item.count}</div>
              <button
                className="w-9 h-9 border border-[#ECECEC] rounded"
                onClick={() => dispatch(setCartItemCount(item.product.id, item.count + 1))}
              >
                +
              </button>
            </div>

            <div className="w-28 text-right font-bold">
              ₺ {(Number(item.product.price) || 0) * item.count}
            </div>

            <button
              className="text-red-600 font-semibold"
              onClick={() => dispatch(removeFromCart(item.product.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <OrderSummaryBox cart={cart} />
    </div>
  );
}
