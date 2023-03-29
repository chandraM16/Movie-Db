import React from "react";
import { genres } from "../genreId";
import { useSelector } from "react-redux";
export const Search = ({ stuffMovies, setStuffMovies }) => {
  const state = useSelector((data) => data.movieData);

  function handleSearchName(name) {
    console.log(name);
    setStuffMovies(
      state.fav.filter((movie) => {
        return movie.original_title.toLowerCase().includes(name);
      })
    );
  }

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Search Movie
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body">
            <input
              type="text"
              className="search-input"
              onChange={(e) => {
                handleSearchName(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            Sort Movie
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body">
            <button type="button" class="btn btn-dark">
              Date : Latest to Old
            </button>
            <button type="button" class="btn btn-dark">
              Rating : High to Low
            </button>
            <button type="button" class="btn btn-dark">
              Rating : Low to High
            </button>
            <button type="button" class="btn btn-warning">
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            Filter
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          {genres.map((genre, i) => {
            return (
              <div key={i} className="genre-div">
                <label htmlFor="genre">
                  {genre + " "}
                  <input type="checkbox" name={genre} id={genre} />
                </label>
              </div>
            );
          })}
          <div className="accordion-body"></div>
        </div>
      </div>
    </div>
  );
};
