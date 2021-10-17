import { LOGIN, LIGHT_THEME, LOGOUT } from "../constants/Constants";

const defaultState = {
  userId: null,
  theme: LIGHT_THEME,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state };
    case LOGOUT:
      return { ...state };
    default:
      return { ...state };
  }
};

export default reducer;
