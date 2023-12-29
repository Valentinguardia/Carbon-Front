import { createAction, createReducer } from "@reduxjs/toolkit";
export const setUser = createAction("SET_USER");

const initialState = {
  id: null,
  email: null,
  fullname: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => action.payload);
});

export default userReducer;




