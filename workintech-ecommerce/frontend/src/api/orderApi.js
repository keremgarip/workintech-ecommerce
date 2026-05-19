import backendApi from "./backendAxios";

export const createOrder = async (orderData) => {
  const response = await backendApi.post("/orders", orderData);
  return response.data;
};

export const getOrderHistory = async (userId, page = 0, size = 10) => {
  const response = await backendApi.get(
    `/orders?userId=${userId}&page=${page}&size=${size}`
  );
  return response.data;
};