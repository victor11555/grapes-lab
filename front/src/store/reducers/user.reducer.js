import {ADD_USER, USER_LOGOUT} from "../types";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_USER:
            return { user: action.payload, isLogged: true }

        case USER_LOGOUT:
            return { ...state, user: {}, isLogged: false }

        default:
            return state;
    }
}
