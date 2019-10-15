import { put, takeLatest, all, call } from 'redux-saga/effects'

import * as todosType from '../types/todos'
import * as servicesAPI from '../../services-api';
import * as actionsCreator from '../actions/todos';


export function* getTodosSaga() {
	try {
		const response = yield call(servicesAPI.getTodos);
		const { data } = response;
		yield put(actionsCreator.getTodoSuccess(data));
	} catch (error) {
		yield put(actionsCreator.getTodoFailed(error))
	}
}

export function* watchingGetTodos() {
  yield takeLatest(todosType.GET_TODO, getTodosSaga)
}

export function* postTodosSaga(action) {
	try {
		const response = yield call(servicesAPI.postTodos, action.payload.data);
		const { data } = response;
		yield put(actionsCreator.addTodoSuccess(data));
	} catch (error) {
		yield put(actionsCreator.addTodoFailed(error))
	}
}

export function* watchingPostTodos() {
  yield takeLatest(todosType.ADD_TODO, postTodosSaga)
}

export function* deleteTodosSaga(action) {
	try {
		const response = yield call(servicesAPI.deleteTodos, action.payload.id);
		const { data } = response;
		yield put(actionsCreator.deleteTodoSuccess(action.payload.id));
		yield call(getTodosSaga);
	} catch (error) {
		yield put(actionsCreator.deleteTodoFailed(error))
	}
}

export function* watchingDeleteTodos() {
  yield takeLatest(todosType.DELETE_TODO, deleteTodosSaga)
}

export function* toggleTodosSaga(action) {
	try {
		const response = yield call(servicesAPI.updateTodos, action.payload.data);
		const { data } = response;
		yield put(actionsCreator.toggleTodoSuccess(action.payload.data));
	} catch (error) {
		yield put(actionsCreator.toggleTodoFailed(error))
	}
}

export function* watchingToggleTodos() {
  yield takeLatest(todosType.TOGGLE_TODO, toggleTodosSaga)
}

export default function* todosSaga() {
  yield all([
    watchingGetTodos(),
    watchingPostTodos(),
    watchingDeleteTodos(),
    watchingToggleTodos(),
  ]);
}