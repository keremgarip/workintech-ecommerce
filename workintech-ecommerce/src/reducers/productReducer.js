export const SET_CATEGORIES = "product/SET_CATEGORIES";
export const SET_PRODUCT_LIST = "product/SET_PRODUCT_LIST";
export const SET_TOTAL = "product/SET_TOTAL";
export const SET_FETCH_STATE = "product/SET_FETCH_STATE";
export const SET_LIMIT = "product/SET_LIMIT";
export const SET_OFFSET = "product/SET_OFFSET";
export const SET_FILTER = "product/SET_FILTER";
export const SET_SORT = "product/SET_SORT";
export const SET_SELECTED_PRODUCT = "product/SET_SELECTED_PRODUCT"

export const NOT_FETCHED = "NOT_FETCHED";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FAILED = "FAILED";

const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    sort: "",
    fetchState: NOT_FETCHED,

    selectedProduct: null,
};

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return { ...state, categories: action.payload };
        case SET_PRODUCT_LIST:
            return { ...state, productList: action.payload };
        case SET_TOTAL:
            return { ...state, total: action.payload };
        case SET_FETCH_STATE:
            return { ...state, fetchState: action.payload };
        case SET_LIMIT:
            return { ...state, limit: action.payload };
        case SET_OFFSET:
            return { ...state, offset: action.payload };
        case SET_FILTER:
            return { ...state, filter: action.payload };
        case SET_SORT:
            return { ...state, sort: action.payload};
        case SET_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.payload};
        default:
            return state;
    }
}