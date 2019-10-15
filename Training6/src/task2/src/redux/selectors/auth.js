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
