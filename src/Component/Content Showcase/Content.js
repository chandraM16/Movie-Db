import React from "react";
import { useLocation } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import TheatersIcon from "@mui/icons-material/Theaters";
import StarIcon from "@mui/icons-material/Star";

import { AddToWishList } from "../Add To WishList/AddToWishList";
import { AddToCart } from "../Add To Cart/AddToCart";
import { Like } from "../Like/Like";

import { genreIds } from "../genreId";
import "../Content Showcase/showcase.css";

export const Content = (prop) => {
  const contentObj = useLocation().state;
  console.log(contentObj)
  return (
    <div className="content-cont">
      <img
        src={`https://www.themoviedb.org/t/p/original/${contentObj.backdrop_path}`}
        alt="Image"
        className="content-bg-img"
      />
      <div className="right-cont">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${contentObj.poster_path}`}
          alt="Poster Image"
          className="content-poster"
        />
      </div>
      <div className="left-cont">
        <h2 className="content-name">
          {contentObj.original_title || contentObj.name}
        </h2>
        <div className="content-date-genre">
          <DateRangeIcon />
          <span>
            {" "}
            {contentObj.release_date || contentObj.first_air_date}
          </span>{" "}
          <TheatersIcon />
          {"   "}
          {contentObj.genre_ids.map((id, i) => (
            <span key={i}>{genreIds[id]},</span>
          ))}
        </div>
        <h3>Overview</h3>
        <h4 className="content-overview">{contentObj.overview}</h4>
        <h3 className="content-rating"><span >IMDb </span> { contentObj.vote_average} <StarIcon />
        </h3>
        <div className="content-action">
          <Like color={"secondary"} movieObj={contentObj} />
          <AddToWishList color={"secondary"} movieObj={contentObj} />
          <AddToCart color={"secondary"} movieObj={contentObj} />
        </div>
      </div>
    </div>
  );
};
