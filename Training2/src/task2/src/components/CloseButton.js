import React, { Component } from 'react';
import { Button } from 'antd';

class CloseButton extends Component {
	render() {
        const { onHideModal } = this.props;

    	return (
            <div className="CloseButton">
                <Button onClick={ onHideModal }>Close</Button>
            </div>
        );
    }
}

export default CloseButton;
