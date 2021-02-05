import {ADD_PROJECT, CREATE_PROJECT, GET_ALL_PROJECT} from "../types";

export const createProjectAC = (payload) => ({
    type: CREATE_PROJECT,
    payload
})

export const getAllProjectAC = (payload) => ({
    type:  GET_ALL_PROJECT,
    payload
})

export const addProjectAC = (payload) => ({
    type: ADD_PROJECT,
    payload
})