import React, { Component } from 'react';
import { Button } from 'antd';

class Modal extends Component {
	render() {
    	const { show, children } = this.props;

        return (
            <div className="Modal">
                <div className={ show ? "modal display-block" : "modal display-none" }>
            		<div className="modal-content">
            			{ children }
            		</div>
        		</div>
            </div>
        );
    }
}

export default Modal;
