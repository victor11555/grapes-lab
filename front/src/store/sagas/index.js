import {all} from 'redux-saga/effects';
import {loginWatcher} from './login.saga';
import {signupWatcher} from "./signup.saga";
import {getProfileWatcher} from "./getProfile.saga";

export function* rootWatcher() {
    yield all([loginWatcher(), signupWatcher(), getProfileWatcher()]);
}