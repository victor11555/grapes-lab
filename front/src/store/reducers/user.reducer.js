import {ADD_PROJECT, ADD_USER} from "../types";

export const userReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_USER:
            return {user: action.payload, isLogged: true};
        case ADD_PROJECT:
            return {...user, projects: [...user.projects, action.payload]}
        default:
            return state;
    }
};