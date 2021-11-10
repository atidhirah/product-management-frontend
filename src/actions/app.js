export const toggleTheme = () => (dispatch) => {
  dispatch({ type: "TOGGLE_THEME" });
};

export const hideSidebar = (isHide) => (dispatch) => {
  dispatch({ type: "HIDE_SIDEBAR", payload: isHide });
};
