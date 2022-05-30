import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CategoriesReducer from './categories.js';
import ProductsReducer from './products.js';

const reducers = combineReducers({ categories: CategoriesReducer, products: ProductsReducer });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();