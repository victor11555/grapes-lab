import { createStore, applyMiddleware } from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import { rootReducer } from '@store/reducers/root.reducer';
import { rootWatcher } from '@store/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = CreateSagaMiddleware();

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware(rootWatcher);
