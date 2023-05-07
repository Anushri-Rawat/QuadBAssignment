import "./style.css";
import React, { useContext, useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import MovieContext from "../../store/MovieContext";

const Carousel = () => {
  const {
    state: { moviesData },
  } = useContext(MovieContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = 5;

  const nextHandler = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prevHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button onClick={prevHandler} className="left-arrow">
            <AiOutlineLeft style={{ color: "white", fontSize: "10px" }} />
          </button>
        )}
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {moviesData?.map((movie, i) => {
              if (i < 5)
                return (
                  <div
                    className="banner"
                    key={movie.show.id}
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0,0, 0.2), rgba(0, 0, 0, 0.3)),url("${
                        movie.show?.image?.original ||
                        "https://img.reelgood.com/content/movie/4322d89d-3995-43e2-a1ba-eea91e298312/poster-780.jpg"
                      }")`,
                    }}
                  >
                    <div className="banner-information">
                      <h2>{movie?.title}</h2>
                      <div className="genres">
                        {movie.show.genres.join(",")}
                      </div>
                      <div className="watch-viewDetails-btn">
                        <a
                          href={`https://www.youtube.com/results?search_query=${movie.show.name}`}
                        >
                          Watch
                        </a>
                        <Link to={`/details/${movie.show.id}`}>
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button onClick={nextHandler} className="right-arrow">
            <AiOutlineRight style={{ color: "white", fontSize: "10px" }} />
          </button>
        )}
      </div>
    </div>
  );
};
export default Carousel;
