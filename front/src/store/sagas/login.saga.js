import { call, put, takeEvery } from 'redux-saga/effects';
import { USER_LOGIN } from '../types';
import { addErrorAC } from '../actions/error.actions';
import { LOGIN_URL } from '../../utils/urls';
import { getProfileAC } from '../actions/getProfile.actions';

async function RequestLogin(payload) {
  const response = await fetch(LOGIN_URL, {
    method: 'POST',
    headers: { 'Content-type': 'Application/json' },
    body: JSON.stringify(payload),
  });
  return await response.json();
}

function* loginWorker({ payload }) {
  const response = yield call(RequestLogin, payload);
  if (response.success) {
    localStorage.setItem('jwt', JSON.stringify(response.token));
    yield put(getProfileAC({ token: response.token }));
  } else yield put(addErrorAC(response.message));
}

export function* loginWatcher() {
  yield takeEvery(USER_LOGIN, loginWorker);
}
