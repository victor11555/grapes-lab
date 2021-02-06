import { ADD_ERROR, USER_LOGOUT } from '../types';

export const errorReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ERROR:
      return [...state, action.payload];

    case USER_LOGOUT:
      return state = [];
    default:
      return state;
  }
};
