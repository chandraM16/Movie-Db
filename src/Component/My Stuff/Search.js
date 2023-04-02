import React, { useEffect, useState } from "react";
import { genres, genreIds } from "../genreId";
import { useSelector } from "react-redux";
import { GenreBtn } from "./GenreBtn";
export const Search = ({ stuffMovies, setStuffMovies, category }) => {
  const state = useSelector((data) => data.movieData);

  const [filterBtnClass, setFilterBtnClass] = useState("");
  let categoryMovie = stuffMovies.map((movie) => movie);

  const [sortedObj, setSortedObj] = useState({
    latest: {
      is_Latest_Sorted: false,
      sorted_Class: "",
    },
    high_To_Low_Rating: {
      is_High_To_Low_Sorted: false,
      sorted_Class: "",
    },
    low_To_High_Rating: {
      is_Low_To_High_Sorted: false,
      sorted_Class: "",
    },
  });

  const [genreArr, setGenreArr] = useState([]);

  function handleSearchName(name) {
    setStuffMovies(
      state[category].filter((movie) => {
        if (movie.original_name) {
          return movie.original_name.toLowerCase().includes(name);
        }
        return movie.original_title.toLowerCase().includes(name);
      })
    );
  }

  function handleSortingClick(e) {
    if (e.target.name === "latest") {
      setStuffMovies(
        categoryMovie.sort((a, b) => {
          return (
            new Date(b.release_date || b.first_air_date).getTime() -
            new Date(a.release_date || a.first_air_date).getTime()
          );
        })
      );
      setSortedObj({
        latest: {
          is_Latest_Sorted: true,
          sorted_Class: "active",
        },
        high_To_Low_Rating: {
          is_High_To_Low_Sorted: false,
          sorted_Class: "",
        },
        low_To_High_Rating: {
          is_Low_To_High_Sorted: false,
          sorted_Class: "",
        },
      });
    } else if (e.target.name === "high_To_Low_Rating") {
      setStuffMovies(
        categoryMovie.sort((a, b) => {
          return b.vote_average - a.vote_average;
        })
      );
      setSortedObj({
        latest: {
          is_Latest_Sorted: false,
          sorted_Class: "",
        },
        high_To_Low_Rating: {
          is_High_To_Low_Sorted: true,
          sorted_Class: "active",
        },
        low_To_High_Rating: {
          is_Low_To_High_Sorted: false,
          sorted_Class: "",
        },
      });
    } else if (e.target.name === "low_To_High_Rating") {
      setStuffMovies(
        categoryMovie.sort((a, b) => {
          return a.vote_average - b.vote_average;
        })
      );
      setSortedObj({
        latest: {
          is_Latest_Sorted: false,
          sorted_Class: "",
        },
        high_To_Low_Rating: {
          is_High_To_Low_Sorted: false,
          sorted_Class: "",
        },
        low_To_High_Rating: {
          is_Low_To_High_Sorted: true,
          sorted_Class: "active",
        },
      });
    } else {
      setStuffMovies(state[category]);
      setSortedObj({
        latest: {
          is_Latest_Sorted: false,
          sorted_Class: "",
        },
        high_To_Low_Rating: {
          is_High_To_Low_Sorted: false,
          sorted_Class: "",
        },
        low_To_High_Rating: {
          is_Low_To_High_Sorted: false,
          sorted_Class: "",
        },
      });
    }
  }

  function addGenre(genre) {
    if (genre === "clear") {
      setGenreArr([]);
      setFilterBtnClass("");
      return;
    }
    if (genreArr.includes(genre)) {
      const updatedGenreArr = genreArr.filter((genre1) => genre1 !== genre);
      // console.log(updatedGenreArr);
      setGenreArr(updatedGenreArr);
    } else {
      setGenreArr([...genreArr, genre]);
    }
  }

  function updatedStuffArrAccordingToGenre(genreArr) {
    if (genreArr.length === 0) {
      // console.log(state[category]);
      setStuffMovies(state[category]);
      return;
    }

    const newUpdatedStuffArr = [];
    for (let i = 0; i < genreArr.length; i++) {
      const genre = genreArr[i];
      // console.log(genre);
      const genreId = getKeyByValue(genreIds, genre);
      // console.log(genreId);
      const resArr = state[category].filter((movieData) => {
        if (movieData.genre_ids.includes(+genreId)) {
          return movieData;
        }
      });
      // console.log("resArr", resArr);

      for (let j = 0; j < resArr.length; j++) {
        const movie = resArr[j];
        if (
          !newUpdatedStuffArr.find((movieObj) => {
            return movieObj.id === movie.id;
          })
        ) {
          newUpdatedStuffArr.push(movie);
        }
      }
    }

    // console.log("newArr", newUpdatedStuffArr);

    setStuffMovies([...newUpdatedStuffArr]);
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  useEffect(() => {
    // console.log(genreArr);
    updatedStuffArrAccordingToGenre(genreArr);
  }, [genreArr]);

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
              placeholder="Search Any Movie.."
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
            <button
              type="button"
              className={`btn btn-dark ${sortedObj.latest.sorted_Class}`}
              name="latest"
              onClick={handleSortingClick}
            >
              Date : Latest to Old
            </button>
            <button
              type="button"
              className={`btn btn-dark ${sortedObj.high_To_Low_Rating.sorted_Class}`}
              name="high_To_Low_Rating"
              onClick={handleSortingClick}
            >
              Rating : High to Low
            </button>
            <button
              type="button"
              className={`btn btn-dark ${sortedObj.low_To_High_Rating.sorted_Class}`}
              name="low_To_High_Rating"
              onClick={handleSortingClick}
            >
              Rating : Low to High
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleSortingClick}
              name="clear"
            >
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
            Select Type
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          {genres.map((genre, i) => {
            return (
              <div key={i} className="genre-div">
                <GenreBtn
                  genre={genre}
                  addGenre={addGenre}
                  filterBtnClass={filterBtnClass}
                />
              </div>
            );
          })}
          <div className="accordion-body"></div>
        </div>
      </div>
    </div>
  );
};
