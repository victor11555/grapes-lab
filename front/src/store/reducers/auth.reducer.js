import {AUTH_FAILURE, AUTH_SUCCESS} from '../types';

export function userReducer(state = {user:{},isLogged:false}, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state,user:action.payload,isLogged:true}
    case AUTH_FAILURE:
      return {...state,user:{},isLogged:false}
    default:
      return state;
  }
}
