import api from "./axios";

export const createOrder = async (userId) => {
  const response = await axiosInstance.post(`/orders?userId=${userId}`);
  return response.data;
};

export const getOrderHistory = async (userId, page = 0, size = 10) => {
  const response = await axios.get(`/orders?userId=${userId}&page=${page}&size=${size}`);
  return response.data;
};