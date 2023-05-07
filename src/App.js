import "./App.css";
import Sidebar from "./component/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import "./App.css";
import { useContext, useEffect } from "react";
import { getAllMovies } from "./actions";
import MovieContext from "./store/MovieContext";

function App() {
  const {
    state: { theme },
    dispatch,
  } = useContext(MovieContext);
  useEffect(() => {
    getAllMovies(dispatch);
  }, []);
  return (
    <div className={`d-flex ${theme} w-100`}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
