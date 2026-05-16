import backendApi from "./backendAxios";

export const getCategories = async () => {
  const response = await axios.get("/categories");
  return response.data;
};