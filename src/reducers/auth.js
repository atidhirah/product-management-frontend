import { AUTH, LOGOUT, PROFILE } from "../constants/Auth";

const defaultState = {
  authData: null,
  authError: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case AUTH:
      if (action?.data.error) {
        console.log(action.data.error);
        return { ...state, authError: action.data.error };
      }
      localStorage.setItem(PROFILE, JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.removeItem(PROFILE);
      return { ...state, authData: null, authError: null };
    default:
      return state;
  }
};

export default reducer;
