import {call, put, takeEvery} from 'redux-saga/effects';
import {DELETE_PROJECT} from '../types';
import {DELETE_PROJECT_URL} from '../../utils/urls';
import {addErrorAC} from '../actions/error.actions';
import {deleteProjectFromStoreAC} from "../actions/project.actions";
import {useSelector} from "react-redux";
import {deleteProjectUserStateAC} from "../actions/user.actions";

async function RequestDeleteProject(payload) {
    const response = await fetch(DELETE_PROJECT_URL, {
        method: 'POST',
        headers: {'Content-type': 'Application/json'},
        body: JSON.stringify(payload),
    });
    return await response.json();
}

function* deleteProjectWorker({payload}) {
    const response = yield call(RequestDeleteProject, payload);
    if (payload.role === 'Admin') {
        if (response.success) yield put(deleteProjectFromStoreAC(response.projectId))
        else yield put(addErrorAC(response.message));
    } else {
        if (response.success) yield put(deleteProjectUserStateAC(response.projectId))
        else yield put(addErrorAC(response.message));
    }
}

export function* deleteProjectWatcher() {
    yield takeEvery(DELETE_PROJECT, deleteProjectWorker);
}

