import React, { useContext } from "react";
import Header from "../../component/Header/Header";
import Carousel from "../../component/Carousel/Carousel";
import MovieContext from "../../store/MovieContext";
import Card from "../../component/Card/Card";
import "./style.css";
import Loader from "../../component/Loader/Loader";

const HomePage = () => {
  const {
    state: { moviesData, loading },
  } = useContext(MovieContext);
  return loading ? (
    <Loader />
  ) : (
    <section className="Homepage">
      <Header />
      <Carousel />
      <h1 className="Homepage-heading">Continue Watching</h1>
      <div className="movies-list">
        {moviesData?.map((item, i) => {
          if (i < 7)
            return (
              <Card data={item} className="movies-item" key={item.show.id} />
            );
        })}
      </div>
      <h1 className="Homepage-heading">Trending Movies</h1>
      <div className="movies-list">
        {moviesData?.map((item, i) => {
          if (i >= 4)
            return (
              <Card data={item} className="movies-item" key={item.show.id} />
            );
        })}
      </div>
    </section>
  );
};

export default HomePage;
