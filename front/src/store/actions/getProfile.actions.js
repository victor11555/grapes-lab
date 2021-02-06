import { GET_PROFILE } from '../types';

export const getProfileAC = (payload) => ({
  type: GET_PROFILE,
  payload,
});