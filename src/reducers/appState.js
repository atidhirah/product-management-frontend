import { LIGHT_THEME, AUTH, LOGOUT } from "../constants/Constants";

const defaultState = {
  authData: null,
  theme: LIGHT_THEME,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.removeItem("profile");
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default reducer;
