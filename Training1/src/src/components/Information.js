import React, { Component } from 'react';
import { Icon, Avatar, Row, Col } from 'antd';

class Information extends Component {
	render() {
		const { name, nationality, avatar, image, description, isInfor, type, place, price, numRate, isSuperHost } = this.props;

		let theme;

		let star = <div>
		        		<Icon type="star" style={{ margin: "5px 3px" }} />
		        		<Icon type="star" style={{ margin: "5px 3px" }} />
		        		<Icon type="star" style={{ margin: "5px 3px" }} />
		        		<Icon type="star" style={{ margin: "5px 3px" }} />
		        		<Icon type="star" style={{ margin: "5px 3px" }} />
		        	</div>

		if(isInfor) {
			theme = <div>
		        		{ star }
			        	<div>
			        		<p>{ description }</p>
			        	</div>
			        	<div style={{ fontSize: "16px" }}>
			        		<Row>
			        			<Col span={5}>
			        				<Avatar 
			        					size={50} 
			        					icon="user" 
			        					src={ avatar } />
			        			</Col>
			        			<Col span={19}>
			        				<div><b>{ name }</b></div>
			        				<div>{ nationality }</div>
			        			</Col>
			        		</Row>
			        	</div>
		        	</div>
		} else {
			theme = <div>
						<h4>{ type } · { place }</h4>
						<h2>{ name }</h2>
						<p>${ price }/night</p>
						<p>
							<span>
				        		<Icon type="star"/>
				        		<Icon type="star"/>
				        		<Icon type="star"/>
				        		<Icon type="star"/>
				        		<Icon type="star"/>
				        	</span>
				        	{ numRate } · { isSuperHost ? "Superhost" : "" }
						</p>
					</div>
		}

	    return (
	        <div className="Information">
	        	<div>
	        		<img width="100%" height="100%" src={ image }/>
	        	</div>
	        	{ theme }
	        </div>
	    );
    }
}

export default Information;
