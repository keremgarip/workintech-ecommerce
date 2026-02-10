export const SET_CART = "cart/SET_CART";
export const SET_PAYMENT = "cart/SET_PAYMENT";
export const SET_ADDRESS = "cart/SET_ADDRESS";

const initialState = {
    cart: [],
    payment: {},
    address: {},
};

export default function shoppingCartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART:
            return { ...state, cart: action.payload };
        case SET_PAYMENT:
            return { ...state, payment: action.payload };
        case SET_ADDRESS:
            return { ...state, address: action.payload };
        default:
            return state;
    }
}