import React, { useContext } from "react";
import MovieContext from "../../store/MovieContext";
import userImg from "../../Assests/user2.jpg";
import searchBtn from "../../Assests/search.svg";
import "./style.css";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {
    state: { theme },
    dispatch,
  } = useContext(MovieContext);
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-between align-items-center w-100">
      <div
        className="d-block d-sm-none"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <h2
          style={{
            color: "var(--text-color)",
            fontFamily: `"Merienda", cursive`,
          }}
        >
          MOVEA
        </h2>
      </div>
      <div className="d-flex justify-content-end align-itemd-center gap-1 w-100">
        <div className="d-none d-sm-flex align-items-center">
          <input
            type="text"
            className="search-input-box"
            placeholder="Search here."
          ></input>
          <img src={searchBtn} alt="Search Icon" className="search-btn"></img>
        </div>
        <div className="d-flex align-items-center theme-block">
          {theme === "dark" ? (
            <div
              onClick={() => {
                dispatch({ type: "SET_THEME", payload: "light" });
              }}
            >
              <BsFillSunFill style={{ color: "var(--text-color)" }} />
            </div>
          ) : (
            <div
              onClick={() => {
                dispatch({ type: "SET_THEME", payload: "dark" });
              }}
            >
              <BsFillMoonFill style={{ color: "var(--text-color)" }} />
            </div>
          )}
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={userImg} className="user-image" alt="john doe img"></img>
          <span
            className="d-none d-sm-block"
            style={{ color: "var(--text-color)" }}
          >
            John Doe
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
