import * as todosType from '../types/todos'

const initState = {
	todos: [],
	isFetching: false,
	isAdding: false,
	isDeleting: false,
	isToggling: false,
	error: '',
}

function todoReducer(state = initState, action) {
	switch(action.type) {
		case todosType.GET_TODO:
			return {
				...state,
				isFetching: true,
				error: '',
			}
		case todosType.GET_TODO_SUCCESS:
			return {
				...state,
				isFetching: false,
				todos: action.payload.data,
			}
		case todosType.GET_TODO_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.payload.error,
			}
		case todosType.ADD_TODO:
			return {
				...state,
				isAdding: true,
			}
		case todosType.ADD_TODO_SUCCESS:
			return {
				...state,
				isAdding: false,
				todos: [...state.todos, action.payload.data],
			}
		case todosType.ADD_TODO_FAILED:
			return {
				...state,
				isAdding: false,
				error: action.payload.error,
			}
		case todosType.TOGGLE_TODO:
			return {
				...state,
				isToggling: true,
			}
		case todosType.TOGGLE_TODO_SUCCESS:
			let newState = Object.assign({}, state);
			newState.todos = newState.todos.map((todo) => {
				if(todo.id === action.payload.data.id) {
					return action.payload.data;
				}
				return todo;
			});
			return {
				...state,
				isToggling: true,
				todos: newState.todos,
			}
		case todosType.TOGGLE_TODO_FAILED:
			return {
				...state,
				isToggling: false,
				error: action.payload.error,
			}
		case todosType.DELETE_TODO:
			return {
				...state,
				isDeleting: true,
			}
		case todosType.DELETE_TODO_SUCCESS:
			return {
				...state,
				isDeleting: false,
			}
		case todosType.DELETE_TODO_FAILED:
			return {
				...state,
				isDeleting: false,
				error: action.payload.error,
			}
		default:
			return state;
	}
}

export default todoReducer;