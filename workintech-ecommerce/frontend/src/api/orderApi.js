import api from "./axios";

export const createOrder = async (orderData) => {
  const response = await api.post("/orders", orderData);
  return response.data;
};

export const getOrderHistory = async (userId, page = 0, size = 10) => {
  const response = await api.get(
    `/orders?userId=${userId}&page=${page}&size=${size}`
  );
  return response.data;
};