import { all } from 'redux-saga/effects';
import { loginWatcher } from './login.saga';
import { signupWatcher } from './signup.saga';
import { getProfileWatcher } from './getProfile.saga';
import { createProjectWatcher } from './createProject.saga';
import { pdfWatcher } from './pdf.saga';
import { GetAllProjectsWatcher } from './getAllProjects.saga';
import { getProfileEditWatcher } from './editProfile.saga';
import { voteProjectWatcher } from './voteProjects.saga';
import { getProjectEditWatcher } from './editProject.saga';
import {deleteProjectWatcher} from '../sagas/deleteProject.saga'

export function* rootWatcher() {
  yield all([loginWatcher(), signupWatcher(), getProfileWatcher(), createProjectWatcher(), pdfWatcher(), GetAllProjectsWatcher(), getProfileEditWatcher(), voteProjectWatcher(), getProjectEditWatcher(), deleteProjectWatcher()]);
}
