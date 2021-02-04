import {applyMiddleware, createStore} from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import {rootReducer} from './reducers/root.reducer';
import {rootWatcher} from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = CreateSagaMiddleware();

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootWatcher);
