import * as todosType from '../types/todos'

export function getTodo() {
	return {
		type: todosType.GET_TODO,
	}
}

export function getTodoSuccess(data) {
	return {
		type: todosType.GET_TODO_SUCCESS,
		payload: {
			data,
		},
	}
}

export function getTodoFailed(error) {
	return {
		type: todosType.GET_TODO_FAILED,
		payload: {
			error,
		}
	}
}

export function addTodo(data) {
	return {
		type: todosType.ADD_TODO,
		payload: {
			data,
		},
	}
}

export function addTodoSuccess(data) {
	return {
		type: todosType.ADD_TODO_SUCCESS,
		payload: {
			data,
		},
	}
}

export function addTodoFailed(error) {
	return {
		type: todosType.ADD_TODO_FAILED,
		payload: {
			error,
		},
	}
}

export function toggleTodo(data) {
	return {
		type: todosType.TOGGLE_TODO,
		payload: {
			data,
		},
	}
}

export function toggleTodoSuccess(data) {
	return {
		type: todosType.TOGGLE_TODO_SUCCESS,
		payload: {
			data,
		},
	}
}

export function toggleTodoFailed(error) {
	return {
		type: todosType.TOGGLE_TODO_FAILED,
		payload: {
			error,
		},
	}
}

export function deleteTodo(id) {
	return {
		type: todosType.DELETE_TODO,
		payload: {
			id,
		},
	}
}

export function deleteTodoSuccess(id) {
	return {
		type: todosType.DELETE_TODO_SUCCESS,
		payload: {
			id,
		},
	}
}

export function deleteTodoFailed(error) {
	return {
		type: todosType.DELETE_TODO_FAILED,
		payload: {
			error,
		},
	}
}