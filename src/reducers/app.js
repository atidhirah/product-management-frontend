const defaultState = {
  theme: "LIGHT",
  hideSidebar: true,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state;
    case "HIDE_SIDEBAR":
      return { ...state, hideSidebar: action.payload };
    default:
      return state;
  }
};

export default reducer;
