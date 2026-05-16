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

export const fetchProductsByQuery = (query = {}) => async (dispatch, getState) => {
  const { limit, offset } = getState().product;

  dispatch(setFetchState(FETCHING));

  try {
    const page = Math.floor(offset / limit);

    const res = await api.get("/products", {
      params: {
        page,
        size: limit,
        ...query,
      },
    });

    const products = res.data?.content ?? [];
    const total = res.data?.totalElements ?? 0;

    dispatch(setProductList(products));
    dispatch(setTotal(total));
    dispatch(setFetchState(FETCHED));
  } catch (e) {
    console.error("fetchProductsByQuery failed:", e?.response?.status, e?.response?.data || e.message);
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