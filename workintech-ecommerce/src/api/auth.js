import api from "./axios";

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = token;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
};