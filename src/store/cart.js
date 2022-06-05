let initialState = {
    cart: [],
    cartCount: 0,
};

export default function CartReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'ADD_TO_CART':
            let cartArray = [...state.cart];
            let newItem = payload
            cartArray.push(newItem);
            return {cartCount: state.cartCount + 1, cart: cartArray}
        case "REMOVE_FROM_CART":
            let removeArr = [...state.cart];
            let removeItem = payload;
            removeArr.forEach((item, index) => {
                if (item.cartId === removeItem.cartId) {
                    removeArr.splice(index, 1);
                    return;
                }
            })
            return {cartCount: state.cartCount - 1, cart: removeArr}
        default:
            return state;
    }
}

export const addCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}
export const removeCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}