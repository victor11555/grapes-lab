import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_PROFILE } from '../types';
import { GET_PROFILE_URL } from '../../utils/urls';
import { addErrorAC } from '../actions/error.actions';
import { addUserAC } from '../actions/user.actions';

async function RequestgetProfile(payload) {
    const response = await fetch(GET_PROFILE_URL, {
        method: 'POST',
        headers: {'Content-type': 'Application/json'},
        body: JSON.stringify(payload)
    })
    return await response.json()
}

function* getProfileWorker({payload}) {
    const user = yield call(RequestgetProfile, payload);
    if (user.success) yield put(addUserAC(user.user))
    else yield put(addErrorAC(user.message));
}

export function* getProfileWatcher() {
    yield takeEvery(GET_PROFILE, getProfileWorker)
}
