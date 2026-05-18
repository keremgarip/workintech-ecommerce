import backendApi from "./backendAxios";

export const register = async (userData) => {
  const response = await backendApi.post("/auth/register", userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await backendApi.post("/auth/login", credentials);
  return response.data;
};