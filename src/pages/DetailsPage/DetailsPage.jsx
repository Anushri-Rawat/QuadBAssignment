import React, { useContext } from "react";
import "./style.css";
import MovieContext from "../../store/MovieContext";
import { useParams } from "react-router-dom";
import Rating from "../../component/Rating/Rating";
import playBtn from "../../Assests/play.svg";
import Header from "../../component/Header/Header";
import Form from "../../component/Form/Form";
import Loader from "../../component/Loader/Loader";

const DetailsPage = () => {
  const {
    state: { moviesData, theme, loading },
  } = useContext(MovieContext);
  const { id } = useParams();
  const data = moviesData.find((item) => item.show.id == id);

  return loading ? (
    <Loader />
  ) : (
    <>
      <div
        className="detailsPage"
        style={{
          backgroundImage: `${
            theme === "dark"
              ? "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.75))"
              : "linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(50, 55, 114, 0.73))"
          }, url("${
            data.show.image?.original ||
            "https://img.reelgood.com/content/movie/4322d89d-3995-43e2-a1ba-eea91e298312/poster-780.jpg"
          }")`,
        }}
      >
        <Header />
        <h1 className="mt-3 fw-bolder movie-title">{data.show.name}</h1>
        <div className="d-flex justify-content-center flex-column mt-2">
          <div className="d-flex flex-column flex-lg-row justify-content-between">
            <div className="d-flex align-items-center ">
              <Rating data={data.show.rating?.average || "4.5"} />
            </div>
            <div className="d-flex align-items-center gap-2">
              <div className="fw-bold">
                Duration:
                {Math.round(Number(data.show.runtime) / 60)}hrs{" "}
                {Number(data.show.runtime) % 60}
                mins
              </div>
              <span className="dot">.</span>
              <div className="fw-bold">Status:{data.show.status}</div>
            </div>
          </div>
          <div className="d-flex align-items-center gap-2 my-1 flex-wrap">
            {data.show?.genres?.map((item, i) => (
              <div className="genre-btn my-2" key={i}>
                {item}
              </div>
            ))}
          </div>
          <p className="movie-overview">{data.show.summary}</p>

          <div className="d-flex flex-column flex-sm-row gap-2 gap-sm-3 my-3">
            <button className="btn border=0 movie-deatils-btn">
              <img src={playBtn} alt="Play icon"></img> Watch Trailer
            </button>
            <button
              className="btn border-0 movie-deatils-btn"
              data-bs-toggle="modal"
              data-bs-target="#ticketBookingModal"
            >
              Buy ticket
            </button>
          </div>
        </div>
      </div>
      <Form data={data} />
    </>
  );
};

export default DetailsPage;
