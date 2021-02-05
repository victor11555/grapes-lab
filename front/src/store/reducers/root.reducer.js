import {combineReducers} from 'redux';
import {errorReducer} from "./error.reducer";
import {userReducer} from "./user.reducer";

export const rootReducer = combineReducers({
    error: errorReducer,
    user: userReducer,

});