import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Container />
                <div className="hrLine"></div>
                <Footer />
            </div>
        );
    }
}

export default App;
