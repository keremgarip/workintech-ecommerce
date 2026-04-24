import { SET_CATEGORIES, SET_FETCH_STATE, SET_FILTER, SET_LIMIT, SET_OFFSET, SET_PRODUCT_LIST, SET_TOTAL, SET_SORT, SET_SELECTED_PRODUCT } from "../reducers/productReducer";

export const setCategories = (categories) => ({type : SET_CATEGORIES, payload: categories});
export const setFetchState = (state) => ({type : SET_FETCH_STATE, payload: state});
export const setFilter = (filter) => ({type : SET_FILTER, payload: filter});
export const setLimit = (limit) => ({type : SET_LIMIT, payload: limit});
export const setOffset = (offset) => ({type : SET_OFFSET, payload: offset});
export const setProductList = (list) => ({type : SET_PRODUCT_LIST, payload: list});
export const setTotal = (total) => ({type : SET_TOTAL, payload: total});
export const setSort = (sort) => ({type: SET_SORT, payload: sort});
export const setSelectedProduct = (product) => ({type: SET_SELECTED_PRODUCT, payload: product});
