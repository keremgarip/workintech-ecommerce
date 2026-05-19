import helperApi from "./helperAxios";

export const getAddresses = async (userId) => {
  const response = await helperApi.get(`/external-users/${userId}/addresses`);
  return response.data;
};

export const createAddress = async (userId, address) => {
  const response = await helperApi.post(
    `/external-users/${userId}/addresses`,
    address
  );

  return response.data;
};

export const updateAddress = async (userId, addressId, address) => {
  const response = await helperApi.put(
    `/external-users/${userId}/addresses/${addressId}`,
    address
  );

  return response.data;
};

export const deleteAddress = async (userId, addressId) => {
  const response = await helperApi.delete(
    `/external-users/${userId}/addresses/${addressId}`
  );

  return response.data;
};

export const addUserActivity = async (userId, activity) => {
  const response = await helperApi.post(
    `/external-users/${userId}/activities`,
    activity
  );

  return response.data;
}

export const getUserActivities = async (userId) => {
  const response = await helperApi.get(
    `/external-users/${userId}/activities`
  );

  return response.data;
};

export const getUserProfile = async (userId) => {
  const response = await helperApi.get(
    `/external-users/${userId}/profile`
  );

  return response.data;
};

export const getExternalProfile = async (userId) => {
  const response = await helperApi.get(
    `/external-users/${userId}/profile`
  );

  return response.data;
};

export const getUserSummary = async (userId) => {
  const response = await helperApi.get(
    `/external-users/${userId}/summary`
  );

  return response.data;
};

export const saveExternalProfile = async (userId, profile) => {
  const response = await helperApi.post(
    `/external-users/${userId}/profile`,
    profile
  );

  return response.data;
};

export const getCards = async (userId) => {
  const response = await helperApi.get(
    `/external-users/${userId}/cards`
  );

  return response.data;
};

export const createCard = async (userId, card) => {
  const response = await helperApi.post(
    `/external-users/${userId}/cards`,
    card
  );

  return response.data;
};

export const updateCard = async (userId, cardId, card) => {
  const response = await helperApi.put(
    `/external-users/${userId}/cards/${cardId}`,
    card
  );

  return response.data;
};

export const deleteCard = async (userId, cardId) => {
  const response = await helperApi.delete(
    `/external-users/${userId}/cards/${cardId}`
  );

  return response.data;
};