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

  return data;
}

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
