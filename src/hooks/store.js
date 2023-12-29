import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import favoriteReducer from "./favorites";

const store = configureStore({
  reducer: {
    user: userReducer,
    fav : favoriteReducer
  },
});

export default store;


