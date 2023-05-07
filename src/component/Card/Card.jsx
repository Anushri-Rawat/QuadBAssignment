import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "../Rating/Rating";
import MovieContext from "../../store/MovieContext";

const Card = ({ data }) => {
  const navigate = useNavigate();
  const {
    state: { theme },
  } = useContext(MovieContext);
  return (
    <div
      className="card"
      style={{
        minWidth: "210px",
        background: "var(--bg-color)",
        boxShadow:
          theme == "light"
            ? "2px 2px 6px #979595"
            : "rgba(0, 0, 0, 0.3) 0px 5px 10px, rgba(0, 0, 0, 0.2) 0px 6px 6px",
      }}
    >
      <img
        src={
          data?.show?.image?.original ||
          "https://img.reelgood.com/content/movie/4322d89d-3995-43e2-a1ba-eea91e298312/poster-780.jpg"
        }
        className="card-img-top"
        alt="movie poster"
        style={{ maxHeight: "200px" }}
      />
      <div
        className="card-body"
        style={{ color: "var(--card-title)", padding: "1rem 0.5rem" }}
      >
        <h4
          className="fw-bold text-left mb-1"
          style={{ color: "var(--card-title)", fontSize: "1rem" }}
        >
          {data?.show?.name}
        </h4>
        <div className="d-flex justify-content-between align-items-center">
          <span>{data?.show?.language}</span>
          <Rating data={data?.show?.rating?.average || "7.5"} />
        </div>
        <button
          className="btn border-none w-100 mt-1"
          style={{
            backgroundColor: "#00b5db",
            borderRadius: "4px",
            color: "white",
          }}
          onClick={() => navigate(`/details/${data?.show?.id}`)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;
