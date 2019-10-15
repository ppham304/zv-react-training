import axios from 'axios'

const service = axios.create({
	baseURL: 'http://localhost:9000',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	}
});

export const getTodos = () => {
	return service.request({
		method: 'GET',
		url: `/todos`,
	});
}

export const postTodos = (data) => {
	return service.request({
		method: 'POST',
		url: `/todos`,
		data: data,
	});
}

export const updateTodos = (data) => {
	return service.request({
		method: 'PUT',
		url: `/todos/${data.id}`,
		data: data
	});
}

export const deleteTodos = (id) => {
	return service.request({
		method: 'DELETE',
		url: `/todos/${id}`
	});
}

