import React, { useContext } from "react";
import { browseArray, categories } from "../../utils/data";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <section className="sidebar d-none d-md-block">
      <div
        className="sidebar-logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <h2>MOVEA</h2>
      </div>
      <div className="sidebar-browse">
        <h2 className="sidebar-title">News Feed</h2>
        <ul className="sidebar-section">
          {browseArray.map((item, i) => {
            return (
              <li
                className="d-flex align-items-center gap-2 sidebar-item"
                key={i}
              >
                <div>{item.img}</div>
                <span>{item.title}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar-categories">
        <h2 className="sidebar-title">Categories</h2>
        <ul className="sidebar-section">
          {categories.map((type, i) => {
            return (
              <li key={i} className="sidebar-item">
                {type}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
