import jwt_decode from 'jwt-decode';

import * as authType from '../types/auth'

const initState = {
	user: {},
	token: '',
	listUser: [],
	isLoggingIn: false,
	isGettingCurrentUser: false,
	isGettingAllUsers: false,
	error: '',
}


function authReducer(state = initState, action) {
	switch(action.type) {
		case authType.GET_LOGIN:
			return {
				...state,
				user: {},
				token: '',
				isLoggingIn: true,
				error: '',
			};
		case authType.GET_LOGIN_SUCCESS:
			let token = action.payload.data.token;
			let decoded = jwt_decode(token);
			return {
				...state,
				user: decoded,
				token: token,
				isLoggingIn: false,
			};
		case authType.GET_LOGIN_FAILED:
			return {
				...state,
				isLoggingIn: false,
				error: action.payload.error,
			};
		case authType.GET_LOGOUT:
			return {
				...state,
				user: {},
				listUser: [],
				token: '',
				isLoggingIn: false,
				isGettingCurrentUser: false,
				isGettingAllUsers: false,
				error: '',
			};
		case authType.GET_CURRENT_USER:
			return {
				...state,
				isGettingCurrentUser: true,
				error: '',
			};
		case authType.GET_CURRENT_USER_SUCCESS:
			return {
				...state,
				isGettingCurrentUser: false,
				listUser: [action.payload.data],
				error: '',
			};
		case authType.GET_CURRENT_USER_FAILED:
			return {
				...state,
				isGettingCurrentUser: false,
				listUser: [],
				error: action.payload.error,
			};
		case authType.GET_ALL_USERS:
			return {
				...state,
				isGettingAllUsers: true,
				error: '',
			};
		case authType.GET_ALL_USERS_SUCCESS:
			return {
				...state,
				isGettingAllUsers: false,
				listUser: [...action.payload.data.users],
				error: '',
			};
		case authType.GET_ALL_USERS_FAILED:
			return {
				...state,
				isGettingAllUsers: false,
				listUser: [],
				error: action.payload.error,
			};
		default:
			return state;
	}
}

export default authReducer;
