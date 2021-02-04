import {ADD_USER} from "../types";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_USER:
            return { user:  action.payload, isLogged: true }
        default:
            return state;
    }
};