import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import { Pagination } from "./Pagination";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

import "./movie.css";

export const Movies = () => {
  const { currPage, directionObj } = useSelector((data) => data.movieData);
  let urlObj = useParams();

  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/${directionObj.category}/${directionObj.keyword}?api_key=fbeee1a4bf1091796397b7e151f8e240&language=en-US&page=${currPage}`
        );
        const data = await response.json();
        setAllMovies(data.results);
        // console.log(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [currPage, directionObj]);

  return (
    <>
      <div className="movies-head">
        <h4>
          {directionObj.name}, {currPage}
        </h4>
        <div style={{ marginTop: "1rem" }}>
          <Pagination />
        </div>
      </div>
      <div className="movies-cont">
        {isLoading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="success" />
          </div>
        ) : (
          allMovies?.map((movieData, i) => {
            return <MovieCard movieObj={movieData} key={i} />;
          })
        )}
      </div>
      
      <Pagination />
    </>
  );
};
