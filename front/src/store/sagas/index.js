import {all} from 'redux-saga/effects';
import {loginWatcher} from './login.saga';
import {signupWatcher} from "./signup.saga";

export function* rootWatcher() {
    yield all([loginWatcher(), signupWatcher()]);
}