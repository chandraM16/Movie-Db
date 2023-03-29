import React from "react";
import { Like } from "../Like/Like";
import { AddToCart } from "../Add To Cart/AddToCart";
import { AddToWishList } from "../Add To WishList/AddToWishList";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Table = ({ stuffMovies }) => {
  const { currPage, directionObj } = useSelector((data) => data.movieData);
  if (!stuffMovies.length) {
    return <h3>No Movie Found</h3>;
  }
  return (
    <>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">IMDb</th>
            <th scope="col">Date</th>
            <th scope="col">Favorite</th>
            <th scope="col">Watch List</th>
            <th scope="col">Cart</th>
          </tr>
        </thead>
        <tbody>
          {stuffMovies.map((movieObj) => {
            return (
              <tr key={movieObj.id}>
                <th scope="row">
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movieObj.poster_path}`}
                    alt={movieObj.title}
                    className="table-img"
                  />
                </th>

                <td>
                  <Link
                    to={`/${directionObj.category}/${directionObj.keyword}/${currPage}/${movieObj.id}`}
                    style={{ textDecoration: "none" }}
                    state={{ ...movieObj }}
                  >
                    <h5 style={{color : "gold", fontSize : "1.2rem"}}>
                      {movieObj.original_title || movieObj.name}
                    </h5>
                  </Link>
                </td>
                <td style={{ color: "gold" }}>
                  {movieObj.vote_average} <StarIcon fontSize="small" />
                </td>
                <td>{movieObj.release_date || movieObj.first_air_date}</td>
                <td>
                  <Like
                    color={"action"}
                    movieObj={movieObj}
                    fontsize={"large"}
                  />
                </td>
                <td>
                  <AddToWishList
                    color={"action"}
                    movieObj={movieObj}
                    fontsize={"large"}
                  />
                </td>
                <td>
                  <AddToCart movieObj={movieObj} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
