import axios from "axios";

const api = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export const setAuthToken = (token) => {
    api.defaults.headers.common["Authorization"] = token;
};

export const clearAuthToken = () => {
    delete api.defaults.headers.common["Authorization"];
}

export default api;