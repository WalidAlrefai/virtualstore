let initialState = {
    categories: [
        // { name: 'FOOD', id: 0 , description: 'STUFF FOR YOU TO EAT' },
        // { name: 'ELECTRONICS', id: 1 , description: 'MAKING YOUR LIFE EASIER WITH NEW TECNOLOGY' },
    ],
    activeCategory:{},
}
let activeCategory;

export default function CategoriesReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "SELECT_CATEGORY":
            activeCategory = state.categories.find(category => category.id === payload);
            return { ...state, activeCategory: activeCategory };
        case "GET_CATEGORY":
            console.log(payload, 'payload');
            return {...state, categories: payload, activeCategory: payload[0]};
        default:
            return state;
    }
}

export function selectCategory(id) {
    return {
        type: "SELECT_CATEGORY",
        payload: id,
    }
}
