import React from "react";
import "./body.css";
import { MainCarousel } from "./MainCarousel";
import { Poster } from "./Poster";

export const Body = () => {
  return (
    <div>
      <MainCarousel />
      <Poster
        name="TV Shows"
        src="https://primetoday.in/wp-content/uploads/2023/02/Orange-And-Red-Modern-Minimalist-The-Most-Attractive-YouTube-Banner-22.png"
        sub_category="top_rated"
        category="tv"
      />
      <Poster
        name="Movies"
        src="https://ahscatseye.com/wp-content/uploads/2020/03/Graphic.jpg"
        sub_category="popular"
        category="movie"
      />
    </div>
  );
};
