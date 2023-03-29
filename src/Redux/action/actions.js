import {
  INCREASE_PAGE,
  DECREASE_PAGE,
  UPDATE_PAGE,
  UPDATE_CATEGORY,
  ADD_FILE_TO_FAV,
  ADD_FILE_TO_CART,
  ADD_FILE_TO_WISHLIST,
} from "../constant";

export function increasePage() {
  return {
    type: INCREASE_PAGE,
  };
}
export function decreasePage() {
  return {
    type: DECREASE_PAGE,
  };
}
export function updatePage(page) {
  return {
    type: UPDATE_PAGE,
    page,
  };
}
export function updateSub_Category(directionObj) {
  return {
    type: UPDATE_CATEGORY,
    directionObj,
  };
}
export function add_file_to_fav(file) {
  return {
    type: ADD_FILE_TO_FAV,
    file,
  };
}
export function add_file_to_wishList(file) {
  return {
    type: ADD_FILE_TO_WISHLIST,
    file,
  };
}
export function add_file_to_cart(file) {
  return {
    type: ADD_FILE_TO_CART,
    file,
  };
}
