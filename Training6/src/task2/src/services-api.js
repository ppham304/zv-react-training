import axios from 'axios'

const service = axios.create({
	baseURL: 'http://localhost:9000',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	}
});

export const postLogIn = (data) => {
	return service.request({
		method: 'POST',
		url: `/login`,
		data: data,
	});
}

export const getCurrentUser = (token) => {
	return service.request({
		method: 'GET',
		url: `/api/users/my`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export const getAllUsers = (token) => {
	return service.request({
		method: 'GET',
		url: `/api/users`,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
