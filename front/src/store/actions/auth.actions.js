import { AUTH_FAILURE, AUTH_SUCCESS } from '../types';
import { GET_PROFILE_URL, LOGIN_URL, SIGN_UP_URL } from '../../utils/urls';

const token = JSON.parse(localStorage.getItem('jwt'));

export const getProfileAC = () => {
  return (dispatch) => {
    if (token) {
      fetch(GET_PROFILE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then((user) => {
          if (user.success) {
            dispatch(getProfileSuccess(user.user));
          } else {
            localStorage.removeItem('jwt');
            dispatch(getProfileFailure());
          }
        });
    }
  };
};

export const signUpAc = ({ email, password, name, phone }) => {
  return (dispatch) => {
    fetch(SIGN_UP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        name: name.value,
        phone: phone.value,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.success) {
          localStorage.setItem('jwt', JSON.stringify(user.token));
          dispatch(getProfileSuccess(user.user));
        } else {
          window.alert('User is not created');
        } //Будет логика с user.failure обрабатывать ошибки, все дела :))
      });
  };
};

export const logInAc = ({ email, password }) => {
  return (dispatch) => {
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        if (user.success) {
          console.log(user.token);
          localStorage.setItem('jwt', JSON.stringify(user.token));
          dispatch(getProfileSuccess(user.user));
        } else {
          window.alert('Auth not succeed');
        }
      });
  };
};


export const getProfileSuccess = (payload) => {
  return {
    type: AUTH_SUCCESS,
    payload,
  };
};

export const getProfileFailure = () => {
  localStorage.removeItem('jwt');
  return {
    type: AUTH_FAILURE,
  };
};

