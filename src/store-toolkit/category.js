import superagent from 'superagent';
import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: 'categories',
    initialState:{
        categories: [],
        activeCategory:{}
    },
    reducers: {
        selectCategory(state,action) {
            let activeCategory = state.categories.find(category => category.id === action.payload);
            state.activeCategory = activeCategory
        },
        getCategory(state,action) {
            state.categories = action.payload
            state.activeCategory= action.payload[0]
        }
    } 
})

export const {selectCategory,getCategory} = categorySlice.actions;

const api = 'https://storefront-api-mh.herokuapp.com';
export const getCatagories = (value) => (dispatch, state) => {
    return superagent.get(`${api}/catagories`).then((res) => {
        console.log(res.body);
        dispatch(getCategory(res.body));
        dispatch(selectCategory(value));
    });
}

export default categorySlice.reducer;