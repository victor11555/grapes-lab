import { USER_SIGNUP } from '../types';

export const userSignupAC = (payload) => ({
  type: USER_SIGNUP,
  payload,
});
