import { GET_ALL_PROJECTS, SAVE_VOTED_PROJECT } from '../types';

export const projectReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return [...action.payload];
    case SAVE_VOTED_PROJECT:
      console.log('saga work');
      return;
    default:
      return state;
  }
};
