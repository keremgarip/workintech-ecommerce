import api from "../api/axios";
import { setProductList, setCategories, setFetchState, setSelectedProduct, setTotal } from "./productActions";
import { FETCHED, FAILED, FETCHING } from "../reducers/productReducer";

export const fetchCategoriesIfNeeded = (force = false) => async (dispatch, getState) => {
  const { categories } = getState().product;

  if (!force && Array.isArray(categories) & categories.length > 0) return;

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
    const res = await api.get("/products", { params: { limit, offset, ...query } });

    const products = res.data?.products ?? res.data ?? [];
    const total =
      res.data?.total ??
      res.data?.count ??
      res.data?.totalCount ??
      (Array.isArray(products) ? products.length : 0);

    dispatch(setProductList(products));
    dispatch(setTotal(total));
    dispatch(setFetchState(FETCHED));
  } catch (e) {
    console.error("fetchProductsByQuery failed:", e?.response?.status, e?.response?.data || e.message);
    console.log("STATUS:", e?.response?.status);
    console.log("DATA:", e?.response?.data);
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