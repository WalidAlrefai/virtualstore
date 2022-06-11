import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productSlice from "./product";
import cartSlice from "./cart";
import detailsSlice from "./details";
import categorySlice from "./category";

const reducers = combineReducers({products: productSlice,categories: categorySlice,cart: cartSlice,details: detailsSlice});

//The store now has redux-thunk added and the Redux DevTools Extension is turned on
const store = configureStore({reducer: reducers});

export default store;