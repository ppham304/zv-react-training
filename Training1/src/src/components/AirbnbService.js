import React, { Component } from 'react';
import { Icon } from 'antd';

class AirbnbService extends Component {
	render() {
		const { icon, service, description } = this.props;

	    return (
	        <div className="AirbnbService">
	        	<Icon type={ icon }  style={{ fontSize: '50px', color: 'green' }} />
	        	<h4>{ service }</h4>
	        	<h4 style={{ fontWeight: "400" }}>{ description }</h4>
	        </div>
	    );
    }
}

export default AirbnbService;
