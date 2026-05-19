import api from "../api/axios";
import backendApi from "../api/backendAxios";
import { setAuthToken } from "../api/auth";
import { setRoles, setUser } from "./clientActions";

export const fetchRolesIfNeeded = () => async (dispatch, getState) => {
  const roles = getState()?.client?.roles;
  if (Array.isArray(roles) && roles.length > 0) return roles;

  const res = await api.get("/roles");
  dispatch(setRoles(res.data || []));
  return res.data || [];
};

export const loginThunk = (payload) => async (dispatch) => {
  const res = await backendApi.post("/auth/login", {
    email: payload.email,
    password: payload.password,
  });

  const data = res.data;

  localStorage.setItem("token", data.token);
  localStorage.setItem("userId", data.userId);
  localStorage.setItem("email", data.email);
  localStorage.setItem("role", data.role);

  setAuthToken(data.token);
  dispatch(setUser(data));

  window.dispatchEvent(new Event("userLoggedIn"));
  window.dispatchEvent(new Event("cartUpdated"));

  return data;
};

export const verifyTokenThunk = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    setAuthToken(token);

    const user = {
      token,
      userId: localStorage.getItem("userId"),
      email: localStorage.getItem("email"),
      role: localStorage.getItem("role"),
    };

    dispatch(setUser(user));
    window.dispatchEvent(new Event("userLoggedIn"));
    window.dispatchEvent(new Event("cartUpdated"));

    return user;
  } catch (e) {
    localStorage.clear();
    setAuthToken(null);
    dispatch(setUser(null));
    window.dispatchEvent(new Event("userLoggedIn"));
    window.dispatchEvent(new Event("cartUpdated"));
    return null;
  }
};
