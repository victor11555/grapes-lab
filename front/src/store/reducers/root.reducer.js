import {combineReducers} from 'redux';
import {errorReducer} from "./error.reducer";
import {userReducer} from "./user.reducer";
import {projectReducer} from "./project.reducer";

export const rootReducer = combineReducers({
    error: errorReducer,
    user: userReducer,
    projects: projectReducer,
});
