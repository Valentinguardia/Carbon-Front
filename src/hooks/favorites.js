import { createAction, createReducer } from "@reduxjs/toolkit";

export const setFav = createAction("SET_FAV");
export const addFav = createAction("ADD_FAV");
export const deleteFav = createAction("DELETE_FAV");

const initialState = { favorites: [] };

const favoriteReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFav, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(addFav, (state, action) => {
      state.favorites.push(action.payload);
    })
    .addCase(deleteFav, (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    });
});


export default favoriteReducer;