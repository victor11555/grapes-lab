import {createStore} from 'redux';
import {rootReducer} from './reducers/root.reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))
