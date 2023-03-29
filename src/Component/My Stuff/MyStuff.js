import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../My Stuff/mystuff.css";
import { Table } from "./Table";
import { Search } from "./Search";
import { useSelector } from "react-redux";
export const MyStuff = () => {
  const state = useSelector((data) => data.movieData);
  let { stuff_category } = useParams();
  const [stuffMovies, setStuffMovies] = useState([]);

  useEffect(() => {
    if (stuff_category === "favorite") {
      console.log("fav", state.fav);
      setStuffMovies([...state.fav]);
    } else if (stuff_category === "watchList") {
      console.log("watchList", state.wishList);
      setStuffMovies([...state.wishList]);
    } else {
      console.log("Cart", state.cart);
      setStuffMovies([...state.cart]);
    }
  }, [state, stuff_category]);

  return (
    <div className="stuff-cont">
      <div className="stuff-title">
        <h2>{stuff_category.toUpperCase()}</h2>
      </div>
      <div className="stuff-box">
        <div className="stuff-filter">
          <Search stuffMovies={stuffMovies} setStuffMovies={setStuffMovies} />
        </div>
        <div className="stuff">
          <Table stuffMovies={stuffMovies} />
        </div>
      </div>
    </div>
  );
};
