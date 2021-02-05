import {ADD_PROJECT, ADD_USER, USER_LOGOUT} from '../types';

export const userReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_USER:

			return {...action.payload, isLogged: true};

		case USER_LOGOUT:
			return {...state, user: {}, isLogged: false};

		case ADD_PROJECT:
			return {...state, projects: [...state.projects, action.payload]};

		default:
			return state;
	}
};
