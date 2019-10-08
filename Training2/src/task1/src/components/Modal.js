import React, { Component } from 'react';
import { Button } from 'antd';

class Modal extends Component {
	render() {
    	const { show, onHideModal } = this.props;

        return (
            <div className="Modal">
                <div className={ show ? "modal display-block" : "modal display-none" }>
            		<div className="modal-content">
            			<p>Modal</p>
            			<Button onClick={ onHideModal }>Close</Button>
            		</div>
        		</div>
            </div>
        );
    }
}

export default Modal;
