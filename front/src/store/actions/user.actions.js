import { ADD_PROJECT, ADD_USER, EDIT_PROFILE } from '../types';

export const addUserAC = (payload) => ({
    type: ADD_USER,
    payload
})

export const addProjectAC = (payload) => ({
    type: ADD_PROJECT,
    payload
})

export const editProfileAC = (payload) => ({
    type: EDIT_PROFILE,
    payload
})

