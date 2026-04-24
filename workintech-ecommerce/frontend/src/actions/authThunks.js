import api, { setAuthToken, clearAuthToken } from "/src/api/axios.js";
import { getStoredToken, setStoredToken, removeStoredToken } from "../store/authStorage";
import { setUser } from "./clientActions";

export const verifyTokenOnLoad = () => async (dispatch) => {
    const token = getStoredToken();
    if (!token) return;

    try {
        setAuthToken(token);
        const response = await api.get("/verify");

        const user = response.data?.user ?? response.data;
        const newToken = response.data?.token ?? response.headers?.authorization;

        dispatch(setUser(user));

        if (newToken) {
            setAuthToken(newToken);
            setStoredToken(newToken);
        } else {
            setAuthToken(token);
        }
    } catch (err) {
        removeStoredToken();
        clearAuthToken();
        dispatch(setUser({}));
    }
};

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
    const response = await api.post("/login", credentials);

    const token = response.data?.token;
    const user = response.data?.user ?? response.data;

    if (token) setAuthToken(token);

    dispatch(setUser(user));

    if (rememberMe && token) {
        setStoredToken(token);
    } else {
        removeStoredToken();
    }
}