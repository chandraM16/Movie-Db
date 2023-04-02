import React from "react";

import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
import { movieDirection, tvDirection } from "./navDirection";
import { useDispatch, useSelector } from "react-redux";
import { updateSub_Category } from "../../Redux/action/actions";

export const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((data) => data.movieData);
  console.log(state)
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary  bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://i.pinimg.com/736x/92/c1/1f/92c11f783bdaa104da523d3baf7a51e5.jpg"
            alt="#"
            className="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Movies
              </div>
              <ul className="dropdown-menu">
                {movieDirection.map((directionObj, i) => {
                  return (
                    <li key={i}>
                      <Link
                        className="dropdown-item"
                        to={directionObj.to}
                        onClick={() => {
                          dispatch(updateSub_Category(directionObj));
                        }}
                      >
                        {directionObj.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TV Shows
              </div>
              <ul className="dropdown-menu">
                {tvDirection.map((directionObj, i) => {
                  return (
                    <li key={i}>
                      <Link
                        className="dropdown-item"
                        to={directionObj.to}
                        onClick={() => {
                          dispatch(updateSub_Category(directionObj));
                        }}
                      >
                        {directionObj.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                My Stuff
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/myStuff/favorite">
                    Favorite
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/myStuff/watchList">
                    Watch List
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/myStuff/cart">
                    Cart
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="info">
            <h3>Fav {state.fav.length}</h3>
            <h3>WatchList {state.wishList.length}</h3>
            <h3>Cart {state.cart.length}</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};
