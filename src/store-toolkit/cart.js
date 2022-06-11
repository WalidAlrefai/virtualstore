import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'carts',
    initialState : {
        cart: [],
        cartCount: 0,
    },
    reducers: {
        addCart(state,action) {
            let cartArray = [...state.cart];
            let newItem = action.payload
            cartArray.push(newItem);
            state.cartCount =state.cartCount + 1;
            state.cart= cartArray
        },
        removeCart(state,action) {
            let removeArr = [...state.cart];
            let removeItem = action.payload;
            removeArr.forEach((item, index) => {
                if (item.cartId === removeItem.cartId) {
                    removeArr.splice(index, 1);
                    return;
                }
            })
            console.log(removeArr)
            state.cartCount = state.cartCount - 1;
            state.cart = removeArr;
        }
    } 
})

export const {addCart,removeCart} = cartSlice.actions;
export default cartSlice.reducer;