import {DELETE_PROJECT_FROM_STORE, GET_ALL_PROJECTS, SAVE_CHANGES_PROJECT} from '../types';

export const projectReducer = (state = [], action) => {
    switch (action.type) {
        case GET_ALL_PROJECTS:
            return [...action.payload];
        case DELETE_PROJECT_FROM_STORE:
            return [...state.filter(el => el._id !== action.payload)]
        default:
            return state;
    }
};
