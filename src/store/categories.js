let initialState = {
    categories: [
        { name: 'food', id: 0 , description: 'Food' },
        { name: 'electronics', id: 1 , description: 'Electronics' },
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