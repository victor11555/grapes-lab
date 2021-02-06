import { call, put, takeEvery } from 'redux-saga/effects';
import { USER_SIGNUP } from '../types';
import { addErrorAC } from '../actions/error.actions';
import { SIGN_UP_URL } from '../../utils/urls';

async function RequestSignup(payload) {
  const response = await fetch(SIGN_UP_URL, {
    method: 'POST',
    headers: { 'Content-type': 'Application/json' },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

function* signupWorker({ payload }) {
  const response = yield call(RequestSignup, payload);
  if (response.success) yield localStorage.setItem('jwt', JSON.stringify(response.token));
  else yield put(addErrorAC(response.message));
}

export function* signupWatcher() {
  yield takeEvery(USER_SIGNUP, signupWorker);
}
