import { combineReducers } from 'redux';
import { authreducer } from './auth.reducer';

export const rootReducer = combineReducers({
  user: authreducer,
})
