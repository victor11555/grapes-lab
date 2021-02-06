import { call, put, takeEvery } from 'redux-saga/effects';
import { VOTE_PROJECT } from '../types';
import { VOTE_PROJECTS_URL } from '../../utils/urls';
import { addErrorAC } from '../actions/error.actions';
import { saveVotedProjectsAC } from '../actions/project.actions';

async function VoteProject(payload) {
  const response = await fetch(VOTE_PROJECTS_URL, {
    method: 'POST',
    headers: { 'Content-type': 'Application/json' },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

function* voteProjectWorker({ payload }) {
  const response = yield call(VoteProject, payload);
  if (response.success) yield put(saveVotedProjectsAC(response.project));
  else yield put(addErrorAC(response.message));
}

export function* voteProjectWatcher() {
  yield takeEvery(VOTE_PROJECT, voteProjectWorker);
}
