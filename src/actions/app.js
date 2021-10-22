export const toggleTheme = () => (dispatch) => {
  dispatch({ type: "TOGGLE_THEME" });
};

export const toggleSidebar = () => (dispatch) => {
  dispatch({ type: "TOGGLE_SIDEBAR" });
};
