import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal'
import { Button } from 'antd';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    showModal = () => {
        this.setState({
            show: true
        });
    }

    hideModal = () => {
        this.setState({
            show: false
        });
    }

    render() {
        const {show} = this.state;
        return (
            <div className="App">
                <div style={{ paddingTop: "10%" }}>
                    <Button onClick={ this.showModal }>Show Modal</Button>
                </div>
                <Modal show={show} onHideModal={this.hideModal} />
            </div>
        );
    }
}

export default App;
