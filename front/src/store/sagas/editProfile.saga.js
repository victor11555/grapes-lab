import { call, put, takeEvery } from 'redux-saga/effects';
import { EDIT_PROFILE } from '../types';
import { addUserAC } from '../actions/user.actions';
import { addErrorAC } from '../actions/error.actions';
import { EDIT_PROFILE_URL, GET_PROFILE_URL } from '../../utils/urls';



async function editProfile(payload) {
  const response = await fetch(EDIT_PROFILE_URL, {
    method: 'POST',
    headers: {'Content-type': 'Application/json'},
    body: JSON.stringify(payload)
  })
  return await response.json()
}


function* editProfileWorker({payload}) {
  const user = yield call(editProfile, payload);
  if (user.success) yield put(addUserAC(user.user))
  else yield put(addErrorAC(user.message));
}


export function* getProfileEditWatcher(){
  yield takeEvery(EDIT_PROFILE,editProfileWorker)
}