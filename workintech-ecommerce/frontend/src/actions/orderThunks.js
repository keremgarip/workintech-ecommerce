import api from "../api/axios";
import { resetCart } from "./shoppingCartActions";

export const createOrder = () => async (dispatch, getState) => {
    const {shoppingCart} = getState();
    const {cart, address, payment} = shoppingCart;

    const selected = (cart || []).filter(
    (item) => item.checked !== false
);

    const price = selected.reduce(
  (sum, item) =>
    sum +
    (Number(item.product?.price ?? item.price) || 0) *
    (Number(item.count ?? item.quantity) || 0),
  0
);

    const payload = {
        address_id: address?.id,
        order_date: new Date().toISOString(),
        card_no: payment?.card_no,
        card_name: payment?.name_on_card,
        card_expire_month: Number(payment?.expire_month),
        card_expire_year: Number(payment?.expire_year),
        card_ccv: Number(payment?.card_ccv),
        price,
        products: selected.map((item) => ({
  product_id:
    item.product_id ??
    item.productId ??
    item.product?.id,

  count: Number(
    item.count ?? item.quantity ?? 0
  ),

  detail: item.detail || "",
        })),
    };

    const response = await api.post("/order", payload);

    dispatch(resetCart());

    return response.data;
};