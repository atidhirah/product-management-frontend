import * as api from "../api";
import { AUTH, LOGOUT } from "../constants/Auth";

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = (history) => (dispatch) => {
  dispatch({ type: LOGOUT });
  history.push("/");
};
