import { LIGHT_THEME, AUTH } from "../constants/Constants";

const defaultState = {
  authData: null,
  theme: LIGHT_THEME,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};

export default reducer;
