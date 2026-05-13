import helperApi from "./helperAxios";

export const getUserSummary = async (userId) => {
  const response = await helperApi.get(`/integration/users/${userId}/summary`);
  return response.data;
};

export const getExternalProfile = async (userId) => {
  const response = await helperApi.get(`/external-users/${userId}/profile`);
  return response.data;
};

export const saveExternalProfile = async (userId, profileData) => {
  const response = await helperApi.post(`/external-users/${userId}/profile`, profileData);
  return response.data;
};

export const addUserActivity = async (userId, activityData) => {
  const response = await helperApi.post(`/external-users/${userId}/activities`, activityData);
  return response.data;
};

export const getUserActivities = async (userId) => {
  const response = await helperApi.get(`/external-users/${userId}/activities`);
  return response.data;
};