import api from "./axios";

export const getUserSummary = async (userId) => {
  const response = await axios.get(`/users/${userId}/summary`);
  return response.data;
};