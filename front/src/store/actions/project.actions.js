
import {ADD_PROJECT, CREATE_PROJECT, GET_ALL_PROJECTS} from "../types";


export const createProjectAC = (payload) => ({
    type: CREATE_PROJECT,
    payload
})

export const getAllProjecstAC = (payload) => ({
    type:  GET_ALL_PROJECTS,
    payload
})

export const addProjectAC = (payload) => ({
    type: ADD_PROJECT,
    payload
})
