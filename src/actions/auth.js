import * as api from "../api";
import { AUTH, LOGOUT } from "../constants/Auth";

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(formData);
    console.log(data);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error.message);
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(formData);
    console.log(data);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
