import backendApi from "./backendAxios";

export const getCart = async (userId) => {
  const response = await backendApi.get(`/cart?userId=${userId}`);
  return response.data;
};

export const addToCart = async (userId, productId, quantity = 1) => {
  const response = await backendApi.post(`/cart/items?userId=${userId}`, {
    productId,
    quantity,
  });
  return response.data;
};

export const updateCartItem = async (userId, productId, quantity) => {
  const response = await backendApi.put(`/cart/items/${productId}?userId=${userId}`, {
    quantity,
  });
  return response.data;
};

export const removeCartItem = async (userId, productId) => {
  const response = await backendApi.delete(`/cart/items/${productId}?userId=${userId}`);
  return response.data;
};

export const clearCart = async (userId) => {
  const response = await backendApi.delete(`/cart/clear?userId=${userId}`);
  return response.data;
};