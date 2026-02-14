import api from "../api/axios";
import {setProductList, setCategories, setFetchState, setSelectedProduct} from "./productActions";
import {FETCHED, FAILED, FETCHING} from "../reducers/productReducer";

export const fetchCategoriesIfNeeded = (force = false) => async (dispatch, getState) => {
    const {categories} = getState().product;

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
    const {limit, offset} = getState().product;

    try {
        dispatch(setFetchState(FETCHING));

        const res = await api.get("/products", {
            params: {limit, offset, ...query},
        });

        const total = res.data?.total ?? 0;
        const products = res.data?.products?? [];

        dispatch(setTotal(total));
        dispatch(setProductList(products));
        dispatch(setFetchState(FETCHED));
    } catch (e) {
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