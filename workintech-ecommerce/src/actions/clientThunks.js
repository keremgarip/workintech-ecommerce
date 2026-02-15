import api from "../api/axios";
import { setAuthToken } from "../api/auth";
import {setRoles, setUser} from "./clientActions";

import api from "../api/axios";
import { setAuthToken } from "../api/auth";
import { setRoles, setUser } from "./clientActions";

export const fetchRolesIfNeeded = () => async (dispatch, getState) => {
  const roles = getState()?.client?.roles;
  if (Array.isArray(roles) && roles.length > 0) return roles;

  const res = await api.get("/roles");
  dispatch(setRoles(res.data || []));
  return res.data || [];
};

export const loginThunk = ({ email, password, rememberMe }) => async (dispatch) => {
  const res = await api.post("/login", { email, password });

  const token = res.data?.token || res.data?.access_token || res.data?.jwt;
  const user = res.data?.user || res.data;

  if (token) {
    setAuthToken(token);
    if (rememberMe) localStorage.setItem("token", token);
  }

  if (user) dispatch(setUser(user));

  return { token, user };
};

export const verifyTokenThunk = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    setAuthToken(token);
    const res = await api.get("/verify");
    const newToken = res.data?.token || res.data?.access_token || res.data?.jwt || token;
    const user = res.data?.user || res.data;

    localStorage.setItem("token", newToken);
    setAuthToken(newToken);

    dispatch(setUser(user));
    return user;
  } catch (e) {
    localStorage.removeItem("token");
    setAuthToken(null);
    return null;
  }
};
