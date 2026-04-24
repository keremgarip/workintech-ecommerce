import api from "../api";
import {setRoles} from "./clientActions";

export const fetchRolesIfNeeded = (force = false) => async (dispatch, getState) => {
    const {roles} = getState().client;

    if (!force && Array.isArray(roles) && roles.length > 0) {
        return;
    }

    const response = await api.get("/roles");
    const data = Array.isArray(response.data) ? response.data : response.data?.roles ?? [];

    dispatch(setRoles(data));
}