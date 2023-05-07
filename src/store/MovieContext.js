import { createContext, useReducer } from "react";
import reducer from "./reducer";

const MovieContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("formUser")) || null,
  theme: "light",
  loading: false,
  errorObj: { error: false, message: "" },
  moviesData: JSON.parse(localStorage.getItem("moviesData")) || null,
};

export const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
