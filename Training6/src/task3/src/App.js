import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import configStore from './redux/configStore';

class App extends Component {
    render() {
        return (
            <Provider store={configStore.store}>
            	<PersistGate loading={null} persistor={configStore.persistor}>
                    <div className="App">
                        <Router>
                            <Switch>
                                <Route exact path="/login" component={Login} />
                                <PrivateRoute path="/home" component={Home} />
                                <Redirect to={{ pathname: "/login"}}/>
                            </Switch>
                        </Router>
                    </div>
            	</PersistGate>
            </Provider>
        );
    }
}


export default App;
