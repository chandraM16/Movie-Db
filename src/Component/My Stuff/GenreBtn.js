import React, { useEffect, useState } from "react";

export const GenreBtn = ({ genre, addGenre, filterBtnClass }) => {
  const [isClicked, setIsClicked] = useState(filterBtnClass);
  useEffect(() => {
    // console.log(1);
    setIsClicked("");
  }, [filterBtnClass]);
  return (
    <>
      <button
        type="button"
        className={`btn btn-dark ${isClicked}`}
        name="latest"
        onClick={(e) => {
          addGenre(genre);
          if (isClicked === "active") {
            setIsClicked("");
          } else {
            setIsClicked("active");
          }
        }}
        style={{ width: "100%" }}
      >
        {genre}
      </button>
    </>
  );
};
