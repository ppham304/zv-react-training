import * as todosType from '../types/todos'

export function addTodo(text) {
	return {
		type: todosType.ADD_TODO,
		text,
	}
}

export function toggleTodo(index) {
	return {
		type: todosType.TOGGLE_TODO,
		index,
	}
}

export function deleteTodo(index) {
	return {
		type: todosType.DELETE_TODO,
		index,
	}
}