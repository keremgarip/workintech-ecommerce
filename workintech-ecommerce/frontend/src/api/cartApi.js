import axiosInstance from "./axiosInstance";

export const getCart = async (userId) => {
  const response = await axiosInstance.get(`/cart?userId=${userId}`);
  return response.data;
};

export const addToCart = async (userId, productId, quantity) => {
  const response = await axiosInstance.post(`/cart/items?userId=${userId}`, {
    productId,
    quantity,
  });
  return response.data;
};

export const updateCartItem = async (userId, productId, quantity) => {
  const response = await axiosInstance.put(`/cart/items/${productId}?userId=${userId}`, {
    quantity,
  });
  return response.data;
};

export const removeCartItem = async (userId, productId) => {
  const response = await axiosInstance.delete(`/cart/items/${productId}?userId=${userId}`);
  return response.data;
};

export const clearCart = async (userId) => {
  const response = await axiosInstance.delete(`/cart/clear?userId=${userId}`);
  return response.data;
};