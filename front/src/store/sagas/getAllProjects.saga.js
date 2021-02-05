import { call, put, takeEvery } from 'redux-saga/effects';
import {GET_ALL_PROJECTS} from '../types';
import {GET_ALL_PROJECTS_URL} from '../../utils/urls';
import { addErrorAC } from '../actions/error.actions';
import {getAllProjectsAC} from "../actions/project.actions";

async function GetAllProjects() {
  const response = await fetch(GET_ALL_PROJECTS_URL);
  return await response.json()
}

function* GetAllProjectsWorker() {
  const response = yield call(GetAllProjects);
  console.log(response);
  if (response.success) yield put(getAllProjectsAC(response.allProjects))
  else yield put(addErrorAC(response.message));
}

export function* GetAllProjectsWatcher() {
  yield takeEvery(GET_ALL_PROJECTS, GetAllProjectsWorker)
}
