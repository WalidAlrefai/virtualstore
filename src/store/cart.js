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
            newItem.InStock = newItem.InStock - 1;
            cartArray.push(newItem);
            console.log(newItem, 'cartArray');
            // newItem.InStock = newItem.InStock - 1;
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
        case "INCREMENT_STOCK":
            let incrementArr = [...state.cart];
            let incrementItem = payload;
            incrementArr.forEach((item, index) => {
                if (item.cartId === incrementItem.cartId) {
                    incrementArr[index].InStock = incrementArr[index].InStock + 1;
                    return;
                }
            })
            return {cartCount: state.cartCount, cart: incrementArr}
        case "DECREMENT_STOCK":
            let decrementArr = [...state.cart];
            let decrementItem = payload;
            decrementArr.forEach((item, index) => {
                if (item.id === decrementItem.id) {
                    decrementArr[index].InStock = decrementArr[index].InStock - 1;
                    return;
                }
            })
            return {cartCount: state.cartCount, cart: decrementArr}
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
export const incrementStock = (item) => {
    return {
        type: 'INCREMENT_STOCK',
        payload: item
    }
}
export const decrementStock = (item) => {
    return {
        type: 'DECREMENT_STOCK',
        payload: item
    }
}