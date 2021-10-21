import * as api from "../api";
import { AUTH, LOGOUT } from "../constants/Constants";

export const login = (formData, history) => async (dispatch) => {
  try {
    console.log("AUTH");
    const { data } = await api.loginUser(formData);

    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const register = (formData, history) => async (dispatch) => {
  try {
    console.log("AUTH");
    const { data } = await api.registerUser(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
