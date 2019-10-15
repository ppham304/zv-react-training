import * as authType from '../types/auth'

export function getLogin(data) {
	return {
		type: authType.GET_LOGIN,
		payload: {
			data,
		},
	}
}

export function getLoginSuccess(data) {
	return {
		type: authType.GET_LOGIN_SUCCESS,
		payload: {
			data,
		},
	}
}

export function getLoginFailed(error) {
	return {
		type: authType.GET_LOGIN_FAILED,
		payload: {
			error,
		},
	}
}

export function getLogout() {
	return {
		type: authType.GET_LOGOUT,
	}
}

export function getCurrentUser() {
	return {
		type: authType.GET_CURRENT_USER,
	}
}

export function getCurrentUserSuccess(data) {
	return {
		type: authType.GET_CURRENT_USER_SUCCESS,
		payload: {
			data,
		},
	}
}

export function getCurrentUserFailed(error) {
	return {
		type: authType.GET_CURRENT_USER_FAILED,
		payload: {
			error,
		},
	}
}

export function getAllUsers(token) {
	return {
		type: authType.GET_ALL_USERS,
		payload: {
			token,
		},
	}
}

export function getAllUsersSuccess(data) {
	return {
		type: authType.GET_ALL_USERS_SUCCESS,
		payload: {
			data,
		},
	}
}

export function getAllUsersFailed(error) {
	return {
		type: authType.GET_ALL_USERS_FAILED,
		payload: {
			error,
		},
	}
}
