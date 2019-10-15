import { createStore, applyMiddleware, compose  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createFilter, createWhitelistFilter } from 'redux-persist-transform-filter';
import autoMergeLevel2  from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig  = {
	key: 'root',
	storage: storage, 
	whitelist: ['auth'],
	transforms: [
		createWhitelistFilter('auth', ['user', 'token']),
	],
	stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig , rootReducer);

const store = createStore(
	persistedReducer,
	composeEnhancers(
		applyMiddleware(sagaMiddleware),
	)
);



const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default { store, persistor };
