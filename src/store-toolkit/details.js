import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
    name: 'details',
    initialState: {
        details: {},
    },
    reducers: {
        setDeatils(state,action) {
            state.details = {...action.payload};

        },
    } 
})

export const {setDeatils} = detailsSlice.actions;
export default detailsSlice.reducer;