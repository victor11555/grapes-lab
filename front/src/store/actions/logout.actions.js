import { USER_LOGOUT } from '../types';

export const userLogoutAC = (payload) => ({
  type: USER_LOGOUT,
  payload
})