import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import ShopIcon from "@mui/icons-material/Shop";

import { useSelector, useDispatch } from "react-redux";
import { add_file_to_cart } from "../../Redux/action/actions";
export const AddToCart = (prop) => {
  const { movieObj, color } = prop;

  const [isInCart, setIsInCart] = useState(false);
  const [cartColor, setCartColor] = useState("info");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.movieData);

  function handleLikeBtn() {
    if (!isInCart) {
      setIsInCart(true);
      setCartColor("success");
      dispatch(add_file_to_cart(movieObj));
    } else {
      setIsInCart(false);
      setCartColor("info");
      dispatch(add_file_to_cart(movieObj));
    }
  }
  useEffect(() => {
    if (data.cart.find((obj) => obj.id === movieObj.id)) {
      setIsInCart(true);
      setCartColor("success");
    }
  }, []);

  return (
    <div onClick={handleLikeBtn}>
      {color === "secondary" ? (
        <Button variant="contained" startIcon={<ShopIcon />} color={cartColor}>
          Cart
        </Button>
      ) : (
        <>
          <ShopIcon fontSize="large" color={cartColor} />
        </>
      )}
    </div>
  );
};
