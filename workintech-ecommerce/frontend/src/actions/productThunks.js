import api from "../api/backendAxios";
import { setProductList, setCategories, setFetchState, setSelectedProduct, setTotal } from "./productActions";
import { FETCHED, FAILED, FETCHING } from "../reducers/productReducer";

export const fetchCategoriesIfNeeded = (force = false) => async (dispatch, getState) => {
  const { categories } = getState().product;

  if (!force && Array.isArray(categories) && categories.length > 0) return;

  try {
    dispatch(setFetchState(FETCHING));
    const response = await api.get("/categories");

    const data = Array.isArray(response.data) ? response.data : response.data?.categories ?? [];
    dispatch(setCategories(data));
    dispatch(setFetchState(FETCHED));
  } catch (error) {
    dispatch(setFetchState(FAILED));
  }
};

export const fetchProductsByQuery =
  ({ page = 0, size = 12, ...query } = {}) =>
  async (dispatch) => {
    dispatch(setFetchState(FETCHING));

    try {
      const res = await api.get("/products", {
        params: {
          page,
          size,
          ...query,
        },
      });

      const products = res.data?.content ?? [];
      const total = res.data?.totalElements ?? 0;

      dispatch(setProductList(products));
      dispatch(setTotal(total));
      dispatch(setFetchState(FETCHED));
    } catch (error) {
      console.error(
        "fetchProductsByQuery failed:",
        error?.response?.status,
        error?.response?.data || error.message
      );

      dispatch(setFetchState(FAILED));
    }
  };

export const fetchProductById = (productId) => async (dispatch) => {
  try {
    dispatch(setFetchState(FETCHING));
    const response = await api.get(`/products/${productId}`);
    dispatch(setSelectedProduct(response.data));
    dispatch(setFetchState(FETCHED));
  } catch (error) {
    dispatch(setFetchState(FAILED));
  }
};

export const fetchProductDetail = (id) => async (dispatch) => {
  const res = await api.get(`/products/${id}`);
  dispatch(setSelectedProduct(res.data));
}