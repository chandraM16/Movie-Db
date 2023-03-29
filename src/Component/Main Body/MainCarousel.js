import React from "react";
import { sampleObj as sampleObj } from "../Movies/smapleMovies";

export const MainCarousel = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${sampleObj[0].backdrop_path}`}
            className="d-block w-100 carousel-img"
            alt="..."
          />
        </div>
        <div className="carousel-item ">
          <img
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${sampleObj[1].backdrop_path}`}
            className="d-block w-100 carousel-img"
            alt="..."
          />
        </div>
        <div className="carousel-item ">
          <img
            src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${sampleObj[2].backdrop_path}`}
            className="d-block w-100 carousel-img"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
