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

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = token;
    else delete config.headers.Authorization;
    return config;
});

export default api;