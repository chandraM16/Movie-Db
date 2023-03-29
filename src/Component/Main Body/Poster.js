import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSub_Category } from "../../Redux/action/actions";

export const Poster = ({ name, src, sub_category, category }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="poster-about">
        <h2>Get Your Popcorn</h2>
        <div className="direction-btn">
          <Link
            to={`/${category}/${sub_category}/1`}
            onClick={() => {
              dispatch(
                updateSub_Category({
                  name: "Top Rated",
                  to: `/${category}/${sub_category}/1`,
                  keyword: `${sub_category}`,
                  category: `${category}`,
                })
              );
            }}
          >
            <button type="button" class="btn btn-outline-light btn-lg">
              {name}
            </button>
          </Link>
        </div>
      </div>
      <div className="poster">
        <img src={src} alt="Img" className="poster-img" />
      </div>
    </>
  );
};
