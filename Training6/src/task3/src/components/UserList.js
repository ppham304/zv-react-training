import React, { Component } from 'react';
import { List, Row, Col } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Link } from "react-router-dom";

import UserDetail from './UserDetail';
import * as authActions from '../redux/actions/auth'
import { getError, getListUser } from '../redux/selectors/auth';

class UserList extends Component {
	componentDidMount() {
		this.onGetAllUsers();
	}

	onGetAllUsers = () => {
		const { getAllUsers } = this.props;
		getAllUsers();
	}

    render() {
    	const { error, listUser } = this.props;
        return (
            <div className="UserList">
            	<Row>
            		<Col span={12}>
            			<div style={{ margin: "10px 10px 10px 20px" }}>
							<List
								header={<h2 style={{ margin: "0" }}>User List</h2>}
								size="small"
								bordered
								dataSource={listUser}
								style={{ textAlign: "left" }}
								renderItem={
									item => 
										<List.Item>
											<Link to={`/home/users/${item.id}`}>{item.fullName}</Link>
										</List.Item>
								}
							/>
							<div className="error">{ error ? error : '' }</div>
						</div>
            		</Col>
            		<Col span={12}>
            			<Switch>
            				<Route path="/home/users/:id" component={UserDetail} />
            			</Switch>
            		</Col>
            	</Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		error: getError(state),
		listUser: getListUser(state),
	};
}

const mapDispatchToProps = {
	getAllUsers: authActions.getAllUsers,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(UserList);
