import { call, put, takeEvery } from 'redux-saga/effects';
import {GET_ALL_PROJECTS} from '../types';
import { GET_ALL_PROJECTS_URL } from '../../utils/urls';
import { addErrorAC } from '../actions/error.actions';
import { addProjectAC } from '../actions/user.actions';

async function RequestGetProject(payload) {
  const response = await fetch(GET_ALL_PROJECTS_URL);
  return await response.json();
}

function* getProjectWorker({ payload }) {
  const response = yield call(RequestGetProject, payload);
  if (response.success) yield put(addProjectAC(response.project));
  else yield put(addErrorAC(response.message));
}

export function* createProjectWatcher() {
  yield takeEvery(GET_ALL_PROJECTS, getProjectWorker);
}
