
import {INIT_ALL_PROJECTS, CREATE_PROJECT, GET_ALL_PROJECTS} from "../types";


export const createProjectAC = (payload) => ({
    type: CREATE_PROJECT,
    payload
})

export const getAllProjectsAC = (payload) => ({
    type:  GET_ALL_PROJECTS,
    payload
})

export const initAllProjectsAC = (payload) => ({
    type: INIT_ALL_PROJECTS,
    payload
})
