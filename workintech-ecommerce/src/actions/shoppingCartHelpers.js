import {setCart} from "./shoppingCartActions";

export const addToCart = (product) => (dispatch, getState) => {
  const cart = getState().shoppingCart.cart || [];
  const pid = product?.id;

  const existing = cart.find((i) => i.product?.id === pid);

  let nextCart;
  if (existing) {
    nextCart = cart.map((i) =>
      i.product?.id === pid
        ? { ...i, count: (i.count || 0) + 1, checked: i.checked ?? true }
        : i
    );
  } else {
    nextCart = [...cart, { product, count: 1, checked: true }];
  }

  dispatch(setCart(nextCart));
};

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