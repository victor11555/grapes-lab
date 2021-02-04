import {ADD_ERROR} from "../types";

export const errorReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ERROR:
            return [...state, action.payload];
        default:
            return state;
    }
};