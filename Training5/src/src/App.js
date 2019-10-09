import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import store from './redux/configStore';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <TodoForm />
                <TodoList />
            </Provider>
        );
    }
}

export default App;
