import { createStore } from "redux";

// Set products list reducer with an empty initial state.
function productsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product]
        default:
            return state
    }
}

export const productsStore = createStore(productsReducer)
