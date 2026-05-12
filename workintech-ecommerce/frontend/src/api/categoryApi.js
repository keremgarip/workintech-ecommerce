import axiosInstance from "./axiosInstance";

export const getCategories = async () => {
  const response = await axios.get("/categories");
  return response.data;
};