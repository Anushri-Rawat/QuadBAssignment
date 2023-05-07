const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_MOVIES_DATA":
      return { ...state, moviesData: action.payload };
    case "ERROR":
      return { ...state, errorObj: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return { ...state };
  }
};

export default reducer;
