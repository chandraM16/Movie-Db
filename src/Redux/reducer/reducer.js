import {
  ADD_FILE_TO_CART,
  ADD_FILE_TO_FAV,
  ADD_FILE_TO_WISHLIST,
  DECREASE_PAGE,
  INCREASE_PAGE,
  UPDATE_CATEGORY,
  UPDATE_PAGE,
} from "../constant";

const initialMovieData = {
  currPage: 1,
  pages: [1],
  directionObj: {
    name: "Popular",
    to: "/movie/popular/1",
    keyword: "popular",
  },
  fav: [],
  wishList: [],
  cart: [],
};
export const movieData = (currState = initialMovieData, action) => {
  switch (action.type) {
    case INCREASE_PAGE:
      let tempAr = [];
      for (let i = 0; i < currState.pages.length + 1; i++) {
        tempAr.push(i + 1);
      }
      return {
        ...currState,
        currPage: currState.currPage + 1,
        pages: tempAr,
      };
    case DECREASE_PAGE:
      if (currState.currPage === 1) {
        return {
          ...currState,
        };
      } else {
        return {
          ...currState,
          currPage: currState.currPage - 1,
        };
      }
    case UPDATE_PAGE:
      return {
        ...currState,
        currPage: action.page,
      };
    case UPDATE_CATEGORY:
      return {
        ...currState,
        currPage: 1,
        directionObj: action.directionObj,
      };
    case ADD_FILE_TO_FAV:
      if (currState.fav.find((obj) => obj.id === action.file.id)) {
        const newFav = currState.fav.filter((obj) => obj.id !== action.file.id);
        return {
          ...currState,
          fav: newFav,
        };
      }
      return {
        ...currState,
        fav: [...currState.fav, action.file],
      };
    case ADD_FILE_TO_WISHLIST:
      if (currState.wishList.find((obj) => obj.id === action.file.id)) {
        // console.log("found");
        const newWishList = currState.wishList.filter(
          (obj) => obj.id !== action.file.id
        );
        return {
          ...currState,
          wishList: newWishList,
        };
      }
      // console.log("new");
      return {
        ...currState,
        wishList: [...currState.wishList, action.file],
      };
    case ADD_FILE_TO_CART:
      if (currState.cart.find((obj) => obj.id === action.file.id)) {
        console.log("found");
        const newCart = currState.cart.filter(
          (obj) => obj.id !== action.file.id
        );
        return {
          ...currState,
          cart: newCart,
        };
      }
      console.log("new");
      return {
        ...currState,
        cart: [...currState.cart, action.file],
      };
    default:
      return currState;
  }
};
