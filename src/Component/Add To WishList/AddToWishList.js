import React, { useState, useEffect } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { Button } from "@mui/material";
import ListAltIcon from "@mui/icons-material/ListAlt";

import { useSelector, useDispatch } from "react-redux";
import { add_file_to_wishList } from "../../Redux/action/actions";
export const AddToWishList = (prop) => {
  const { movieObj, color, fontsize } = prop;

  const [isInCart, setIsInCart] = useState(false);
  const [cartColor, setCartColor] = useState(color);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieData);

  function handleLikeBtn() {
    if (!isInCart) {
      setIsInCart(true);
      setCartColor("success");
      dispatch(add_file_to_wishList(movieObj));
    } else {
      setIsInCart(false);
      setCartColor(color);
      dispatch(add_file_to_wishList(movieObj));
    }
  }
  useEffect(() => {
    if (data.wishList.find((obj) => obj.id === movieObj.id)) {
      // console.log(movieObj.title);
      setIsInCart(true);
      setCartColor("success");
    }
  }, []);

  return (
    <div onClick={handleLikeBtn}>
      {prop.color === "secondary" ? (
        <Button
          variant="contained"
          startIcon={<ListAltIcon />}
          color={cartColor}
        >
          Watch List
        </Button>
      ) : (
        <AddBoxIcon color={cartColor} fontSize={fontsize} />
      )}
    </div>
  );
};
