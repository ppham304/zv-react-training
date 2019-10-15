import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import './App.css';
import Login from './components/Login';
import configStore from './redux/configStore';
import { getToken, getUser } from './redux/selectors/auth'

class App extends Component {
    render() {
        return (
            <Provider store={configStore.store}>
            	<PersistGate loading={null} persistor={configStore.persistor}>
	            	<div className="App">
	                	<Login />
	            	</div>
            	</PersistGate>
            </Provider>
        );
    }
}

export default App;
