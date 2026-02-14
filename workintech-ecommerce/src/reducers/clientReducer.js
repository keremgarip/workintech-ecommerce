export const SET_USER = "client/SET_USER";
export const SET_ROLES = "client/SET_ROLES";
export const SET_THEME = "client/SET_THEME";
export const SET_LANGUAGE = "client/SET_LANGUAGE";
export const SET_ADDRESS_LIST = "client/SET_ADDRESS_LIST"

const initialState = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "light",
    language: "tr",
};

export default function clientReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        case SET_ROLES:
            return { ...state, roles: action.payload };
        case SET_THEME:
            return { ...state, theme: action.payload };
        case SET_LANGUAGE:
            return { ...state, language: action.payload };
        case SET_ADDRESS_LIST:
            return { ...state, addressList: action.payload };
        default:
            return state;
    }
}