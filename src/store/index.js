import {applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CategoriesReducer from './categories.js';
import ProductsReducer from './products.js';
import CartReducer from "./cart.js";
import thunk from 'redux-thunk';

const reducers = combineReducers({ categories: CategoriesReducer, products: ProductsReducer , cart:CartReducer });

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();