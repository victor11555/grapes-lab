import { GET_ALL_PROJECTS, SAVE_CHANGES_PROJECT, SAVE_VOTED_PROJECT } from '../types';

export const projectReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PROJECTS:
      return [...action.payload];
    case SAVE_VOTED_PROJECT:
      console.log('saga work');
      return;
    case SAVE_CHANGES_PROJECT:
      console.log('saga work2');
      return;
    default:
      return state;
  }
};
