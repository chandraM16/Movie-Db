import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Like } from "../Like/Like";
import { AddToWishList } from "../Add To WishList/AddToWishList";
import { AddToCart } from "../Add To Cart/AddToCart";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Popup({ message, variant, movieObj }) {
  const [open, setOpen] = React.useState(false);
  const [control, setControl] = useState(false);
  const [color, setColor] = useState("success");
  const [text, setText] = useState(message);

  const handleClick = () => {
    if (!control) {
      setControl(true);
      setText(message);
      setColor("success");
    } else {
      setControl(false);
      setText("Removed !");
      setColor("error");
    }
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Button variant={variant} onClick={handleClick} size="small">
        {message === "Movie Added To Favorite" ? (
          <Like movieObj={movieObj} color={"action"} fontsize={"medium"} />
        ) : message === "Movie Added To Wish List" ? (
          <AddToWishList
            movieObj={movieObj}
            color={"action"}
            fontsize={"medium"}
          />
        ) : (
          <>
            <AddToCart movieObj={movieObj} />
          </>
        )}
      </Button>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color} sx={{ width: "100%" }}>
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
