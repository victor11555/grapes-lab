import { all } from 'redux-saga/effects';
import { authWatcher } from '@store/sagas/auth.saga';

export function* rootWatcher() {
    yield all([authWatcher()]);
}