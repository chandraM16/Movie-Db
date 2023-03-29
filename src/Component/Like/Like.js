import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add_file_to_fav } from "../../Redux/action/actions";

import { Button } from "@mui/material";

export const Like = ({ movieObj, color, fontsize }) => {
  // console.log(movieObj)
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const [likeColor, setLikeColor] = useState(color);
  const data = useSelector((state) => state.movieData);

  function handleLikeBtn() {
    if (!isLike) {
      setIsLike(true);
      setLikeColor("success");
      dispatch(add_file_to_fav(movieObj));
    } else {
      setIsLike(false);
      setLikeColor(color);
      dispatch(add_file_to_fav(movieObj));
    }
  }

  useEffect(() => {
    if (data.fav.find((obj) => obj.id === movieObj.id)) {
      setIsLike(true);
      setLikeColor("success");
    }
  }, []);

  return (
    <div onClick={handleLikeBtn}>
      {color === "secondary" ? (
        <Button
          variant="contained"
          startIcon={<FavoriteIcon />}
          color={likeColor}
        >
          Favorite
        </Button>
      ) : (
        <FavoriteIcon color={likeColor} fontSize={fontsize} />
      )}
    </div>
  );
};
