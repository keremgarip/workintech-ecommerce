import backendApi from "./backendAxios";

export const getProducts = async ({
  page = 0,
  size = 12,
  filter,
  sort,
  category,
} = {}) => {
  const params = new URLSearchParams();

  params.append("page", page);
  params.append("size", size);

  if (filter) params.append("filter", filter);
  if (sort) params.append("sort", sort);
  if (category) params.append("category", category);

  const response = await backendApi.get(
    `/products?${params.toString()}`
  );

  return response.data;
};

export const getProductById = async (id) => {
  const response = await backendApi.get(`/products/${id}`);
  return response.data;
};