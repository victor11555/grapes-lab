import {ADD_PROJECT, ADD_USER, DELETE_PROJECT_USER_STATE, EDIT_PROFILE} from '../types';

export const addUserAC = (payload) => ({
  type: ADD_USER,
  payload,
});

export const addProjectAC = (payload) => ({
  type: ADD_PROJECT,
  payload,
});

export const editProfileAC = (payload) => ({
  type: EDIT_PROFILE,
  payload,
});

export const deleteProjectUserStateAC = (payload) => ({
  type: DELETE_PROJECT_USER_STATE,
  payload
})

