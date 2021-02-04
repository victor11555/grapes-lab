import {call, put, takeEvery} from 'redux-saga/effects';
import {USER_SIGNUP} from "../types";
import {addErrorAC} from "../actions/error.actions";

async function RequestSignup(payload) {
    const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: {'Content-type': 'Application/json'},
        body: JSON.stringify({payload})
    })
    const resJSON = await response.json();
    return resJSON
}

function* signupWorker({payload}) {
    const response = yield call(RequestSignup, payload);
    if (response.success) localStorage.setItem('jwt', response.token)
    yield put(addErrorAC(response.message));
}

export function* signupWatcher() {
    yield takeEvery(USER_SIGNUP, signupWorker);
}