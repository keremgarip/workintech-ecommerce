import axiosInstance from "./axiosInstance";

export const getUserSummary = async (userId) => {
  const response = await axiosInstance.get(`/users/${userId}/summary`);
  return response.data;
};