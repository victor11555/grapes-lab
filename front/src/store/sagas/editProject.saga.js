import { call, put, takeEvery } from 'redux-saga/effects';
import { EDIT_PROJECT } from '../types';
import { saveChangesProjectAC } from '../actions/project.actions';
import { addErrorAC } from '../actions/error.actions';
import { EDIT_PROJECT_URL } from '../../utils/urls';


async function editProject(payload) {
  const response = await fetch(EDIT_PROJECT_URL, {
    method: 'POST',
    headers: { 'Content-type': 'Application/json' },
    body: JSON.stringify(payload),
  });
  return await response.json();
}


function* editProjectWorker({ payload }) {
  const user = yield call(editProject, payload);
  if (user.success) yield put(saveChangesProjectAC(user.project));
  else yield put(addErrorAC(user.message));
}


export function* getProjectEditWatcher() {
  yield takeEvery(EDIT_PROJECT, editProjectWorker);
}
