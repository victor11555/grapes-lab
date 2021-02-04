import {combineReducers} from 'redux';
import {errorReducer} from "./error.reducer";

export const rootReducer = combineReducers({
    error: errorReducer,
});