import * as todosType from '../types/todos'

const initState = {
	todos: [
		{
			text: "Todo 1",
			completed: true
		},
		{
			text: "Todo 2",
			completed: true
		},
		{
			text: "Todo 3",
			completed: false
		}
	]
}

function todoReducer(state = initState, action) {
	switch(action.type) {
		case todosType.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, {text: action.text, completed: false }],
			}
		case todosType.TOGGLE_TODO:
			return {
				...state,
				todos: state.todos.map((todo, index) => {
					if(index == action.index) {
						return {
							...todo,
							completed: !todo.completed,
						}
					} else {
						return todo;
					}
				}),
			}
		case todosType.DELETE_TODO:
			return {
				...state,
				todos: [...state.todos.slice(0, action.index), ...state.todos.slice(action.index + 1)],
			}
		default:
			return state;
	}
}

export default todoReducer;