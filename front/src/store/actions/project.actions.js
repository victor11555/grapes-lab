import { CREATE_PROJECT, GET_ALL_PROJECTS, INIT_ALL_PROJECTS, SAVE_VOTED_PROJECT, VOTE_PROJECT, EDIT_PROJECT, SAVE_CHANGES_PROJECT } from '../types';

export const createProjectAC = (payload) => ({
  type: CREATE_PROJECT,
  payload,
});

export const getAllProjectsAC = (payload) => ({
  type: GET_ALL_PROJECTS,
  payload,
});

export const initAllProjectsAC = (payload) => ({
  type: INIT_ALL_PROJECTS,
  payload,
});

export const voteProjectsAC = (payload) => ({
  type: VOTE_PROJECT,
  payload,
});

export const saveVotedProjectsAC = (payload) => ({
  type: SAVE_VOTED_PROJECT,
  payload,
});

export const editProjectAC = (payload) => ({
  type: EDIT_PROJECT,
  payload,
});

export const saveChangesProjectAC = (payload) => ({
  type: SAVE_CHANGES_PROJECT,
  payload,
});
