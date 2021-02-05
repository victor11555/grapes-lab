import {GET_ALL_PROJECTS} from '../types';

export const projectReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      console.log(action.payload);
      return [...action.payload];
    default:
      return state;
  }
};
