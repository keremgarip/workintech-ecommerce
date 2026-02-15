import api from "../api/axios";
import { resetCart } from "./shoppingCartActions";

export const createOrder = () => async (dispatch, getState) => {
    const {shoppingCart} = getState();
    const {cart, address, payment} = shoppingCart;

    const selected = (cart || []).filter((i) => i.checked);

    const price = selected.reduce(
        (sum, i) => sum + (Number(i.product.price) || 0) * i.count,
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
        products: selected.map((i) => ({
            product_id: i.product_id,
            count: i.count,
            detail: i.detail || "",
        })),
    };

    const response = await api.post("/order", payload);

    dispatch(resetCart());

    return response.data;
};