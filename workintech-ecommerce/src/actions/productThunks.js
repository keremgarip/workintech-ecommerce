import api from "../api";
import {setCategories, setFetchState} from "./productActions";
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