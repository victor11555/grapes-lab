import {ADD_PROJECT, ADD_USER, DELETE_PROJECT_USER_STATE, USER_LOGOUT} from '../types';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...action.payload, isLogged: true };

    case USER_LOGOUT:
      return state = {};

    case ADD_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };

    case DELETE_PROJECT_USER_STATE:
      return {...state, projects:[...state.projects.filter(el => el._id != action.payload)]}

    default:
      return state;
  }
};
