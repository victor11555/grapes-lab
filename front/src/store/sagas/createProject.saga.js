import { call, put, takeEvery } from 'redux-saga/effects';
import {CREATE_PROJECT} from '../types';
import {CREATE_PROJECT_URL} from '../../utils/urls';
import { addErrorAC } from '../actions/error.actions';
import {addProjectAC} from "../actions/user.actions";

async function RequestCreateProject(payload) {
    const response = await fetch(CREATE_PROJECT_URL, {
        method: 'POST',
        headers: {'Content-type': 'Application/json'},
        body: JSON.stringify(payload)
    })
    return await response.json()
}

function* createProjectWorker({payload}) {
    const response = yield call(RequestCreateProject, payload);
    if (response.success) yield put(addProjectAC(response.project))
    yield put(addErrorAC(response.message));
}

export function* createProjectWatcher() {
    yield takeEvery(CREATE_PROJECT, createProjectWorker)
}
