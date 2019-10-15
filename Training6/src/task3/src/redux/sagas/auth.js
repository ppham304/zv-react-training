import { put, takeLatest, all, call, select } from 'redux-saga/effects'

import * as authType from '../types/auth'
import * as servicesAPI from '../../services-api';
import * as actionsCreator from '../actions/auth';
import * as authSelectors from '../selectors/auth'

export function* getLoginSaga(action) {
	try {
		const response = yield call(servicesAPI.postLogIn, action.payload.data);
		const { data } = response;
		if(data.error)
			yield put(actionsCreator.getLoginFailed(data.error));
		else
			yield put(actionsCreator.getLoginSuccess(data));
	} catch (error) {
		yield put(actionsCreator.getLoginFailed(error.response.data.error));
	}
}

export function* watchingGetLogin() {
	yield takeLatest(authType.GET_LOGIN, getLoginSaga);
}

export function* getCurrentUserSaga(action) {
	try {
		const token = yield select(authSelectors.getToken);
		const response = yield call(servicesAPI.getCurrentUser, token);
		const { data } = response;
		if(data.error)
			yield put(actionsCreator.getCurrentUserFailed(data.error));
		else
			yield put(actionsCreator.getCurrentUserSuccess(data));
	} catch (error) {
		yield put(actionsCreator.getCurrentUserFailed(error.response.data.error));
	}
}

export function* watchingGetCurrentUser() {
	yield takeLatest(authType.GET_CURRENT_USER, getCurrentUserSaga);
}

export function* getAllUsersSaga(action) {
	try {
		const token = yield select(authSelectors.getToken);
		const response = yield call(servicesAPI.getAllUsers, token);
		const { data } = response;
		if(data.error)
			yield put(actionsCreator.getAllUsersFailed(data.error));
		else
			yield put(actionsCreator.getAllUsersSuccess(data));
	} catch (error) {
		yield put(actionsCreator.getAllUsersFailed(error.response.data.error));
	}
}

export function* watchingGetAllUsers() {
	yield takeLatest(authType.GET_ALL_USERS, getAllUsersSaga);
}

export default function* Saga() {
	yield all([
		watchingGetLogin(),
		watchingGetCurrentUser(),
		watchingGetAllUsers(),
	]);
}