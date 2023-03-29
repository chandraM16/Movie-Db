import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreasePage,
  increasePage,
  updatePage,
} from "../../Redux/action/actions";

export const Pagination = () => {
  const { currPage, pages, directionObj } = useSelector(
    (data) => data.movieData
  );
  const dispatch = useDispatch();

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <Link
            className="page-link"
            to={`/movies/${directionObj.keyword}/${currPage - 1}`}
            aria-label="Previous"
            onClick={() => {
              dispatch(decreasePage());
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </Link>
        </li>
        {pages?.map((page, i) => {
          return (
            <li className="page-item" key={i}>
              <Link
                className="page-link"
                to={`/movies/${directionObj.keyword}/${page}`}
                onClick={() => {
                  dispatch(updatePage(page));
                }}
              >
                {page}
              </Link>
            </li>
          );
        })}

        <li className="page-item">
          <Link
            className="page-link"
            to={`/movies/${directionObj.keyword}/${currPage + 1}`}
            aria-label="Next"
            onClick={() => {
              dispatch(increasePage());
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
