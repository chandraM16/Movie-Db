import React from "react";
import "./movie.css";
import Popup from "./Popup";
import { useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export const MovieCard = ({ movieObj }) => {
  const { currPage, directionObj } = useSelector((data) => data.movieData);

  return (
    <div className="card movie-card">
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieObj.poster_path}`}
        className="card-img-top card-img"
        alt="..."
      />
      <div className="card-body movie-card-body">
        <Link
          to={`/${directionObj.category}/${directionObj.keyword}/${currPage}/${movieObj.id}`}
          style={{ textDecoration: "none" }}
          state={{ ...movieObj }}
        >
          <h5 className="card-title">
            {movieObj.original_title || movieObj.name}
          </h5>
        </Link>
        <h4 className="movie-rating">
          {" "}
          <span style={{ color: "white" }}>IMDb </span>
          {movieObj.vote_average} <StarIcon fontSize="small" />
        </h4>
        <p className="card-text movie-release-date">
          {movieObj.release_date || movieObj.first_air_date}
        </p>
      </div>
      {
        <div className="add-to-fav">
          <Popup
            message={"Movie Added To Favorite"}
            variant={"text"}
            movieObj={movieObj}
          />
        </div>
      }
      {
        <div className="add-to-wishList">
          <Popup
            message={"Movie Added To Wish List"}
            variant={"text"}
            movieObj={movieObj}
          />
        </div>
      }
      {
        <div className="add-to-cart">
          <Popup
            message={"Movie Added To Cart"}
            variant={"text"}
            movieObj={movieObj}
          />
        </div>
      }
    </div>
  );
};
