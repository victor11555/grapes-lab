import { call, put, takeEvery } from 'redux-saga/effects';
import {INIT_ALL_PROJECTS} from '../types';
import {GET_ALL_PROJECTS_URL} from '../../utils/urls';
import { addErrorAC } from '../actions/error.actions';
import {getAllProjectsAC} from "../actions/project.actions";

async function GetAllProjects(payload) {
  console.log('gggg');
  const response = await fetch(GET_ALL_PROJECTS_URL);
  return await response.json()
}

function* GetAllProjectsWorker({ payload }) {
  const response = yield call(GetAllProjects, payload);
  if (response.success) yield put(getAllProjectsAC( response.allProjects))
  else yield put(addErrorAC(response.message));
}

export function* GetAllProjectsWatcher() {
  yield takeEvery(INIT_ALL_PROJECTS, GetAllProjectsWorker)
}
