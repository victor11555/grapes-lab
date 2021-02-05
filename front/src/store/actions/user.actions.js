import {ADD_PROJECT, ADD_USER} from "../types";

export const addUserAC = (payload) => ({
    type: ADD_USER,
    payload
})

export const addProjectAC = (payload) => ({
    type: ADD_PROJECT,
    payload
})

