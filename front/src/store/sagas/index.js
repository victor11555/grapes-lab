import {all} from 'redux-saga/effects';
import {loginWatcher} from './login.saga';
import {signupWatcher} from "./signup.saga";
import {getProfileWatcher} from "./getProfile.saga";
import {createProjectWatcher} from "./createProject.saga";
import { pdfWatcher } from './pdf.saga';
import { GetAllProjectsWatcher } from './getAllProjects.saga';

export function* rootWatcher() {
    yield all([loginWatcher(), signupWatcher(), getProfileWatcher(), createProjectWatcher(), pdfWatcher(), GetAllProjectsWatcher()]);
}
