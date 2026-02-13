import {setCart} from "./shoppingCartActions";

export const addToCart = (product) => (dispatch, getState) => {
    const cart = getState().shoppingCart.cart || [];
    const idx = cart.findIndex((i) => String(i.product.id) === String(product.id));

    let next;
    if (idx >= 0) {
        next = cart.map((i,n) => (n === idx ? {...i, count: i.count + i} : i));
    } else {
        next = [...cart, {count:1, checked: true, product}];
    }

    dispatch(setCart(next));
}

export const removeFromCart = (productId) => (dispatch, getState) => {
  const cart = getState().shoppingCart.cart || [];
  dispatch(setCart(cart.filter((i) => String(i.product.id) !== String(productId))));
};

export const setCartItemCount = (productId, count) => (dispatch, getState) => {
  const cart = getState().shoppingCart.cart || [];
  const next = cart.map((i) =>
    String(i.product.id) === String(productId) ? { ...i, count: Math.max(1, count) } : i
  );
  dispatch(setCart(next));
};

export const toggleCartItemChecked = (productId) => (dispatch, getState) => {
  const cart = getState().shoppingCart.cart || [];
  const next = cart.map((i) =>
    String(i.product.id) === String(productId) ? { ...i, checked: !i.checked } : i
  );
  dispatch(setCart(next));
};