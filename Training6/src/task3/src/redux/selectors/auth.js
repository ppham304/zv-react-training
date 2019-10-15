export const getError = (state) => {
	return state.auth.error;
}

export const getToken = (state) => {
	return state.auth.token;
}

export const getUser = (state) => {
	return state.auth.user;
}

export const getListUser = (state) => {
	return state.auth.listUser;
}

export const getIsGettingCurrentUser = (state) => {
	return state.auth.isGettingCurrentUser;
}

export const getIsGettingAllUsers = (state) => {
	return state.auth.isGettingAllUsers;
}
