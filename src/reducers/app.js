const defaultState = {
  theme: "LIGHT",
  hideSidebar: true,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state;
    case "TOGGLE_SIDEBAR":
      const newStatus = !state.hideSidebar;
      console.log(newStatus);
      return { ...state, hideSidebar: newStatus };
    default:
      return state;
  }
};

export default reducer;
