import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";

export const getAllMovies = async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const url = `${BASE_URL}/search/shows?q=all`;
    const res = await axios.get(url);
    dispatch({ type: "SET_MOVIES_DATA", payload: res.data });
    localStorage.setItem("moviesData", JSON.stringify(res.data));
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({
      type: "ERROR",
      payload: { error: true, message: error.response.data },
    });
  }
};
