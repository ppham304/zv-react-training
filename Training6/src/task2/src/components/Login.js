import React, { Component } from 'react';
import { Icon, Input, Button, Row, Col, List } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '../redux/actions/auth'
import { getError, getToken, getUser, getListUser } from '../redux/selectors/auth';

class Login extends Component {
	onLogIn = () => {
		const { getLogin } = this.props;
		const user = {
			email: this.username.input.value,
			password: this.password.input.value,
		};
		getLogin(user);
	}

	onLogout = () => {
		const { getLogout } = this.props;
		getLogout();
	}

	onGetCurrentUser = () => {
		const { getCurrentUser } = this.props;
		getCurrentUser();
	}

	onGetAllUsers = () => {
		const { getAllUsers } = this.props;
		getAllUsers();
	}

    render() {
    	const { error, token, user, listUser } = this.props;
        return (
            <div className="Login">
            	{
	            	!token ?
	            		<div>
			            	<h1>Log in</h1>
			            	<div>
			            		<Input
			            			className="input-login"
									prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Username"
									ref={(ref) => { this.username = ref }}
								/>
			            	</div>
			            	<div>
			            		<Input
			            			className="input-login"
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
									type="password"
									placeholder="Password"
									ref={(ref) => { this.password = ref }}
								/>
			            	</div>
			            	<div className="error">{ error ? error : '' }</div>
			            	<div>
			            		<Button type="primary" icon="login" onClick={ this.onLogIn }>
									Log in
								</Button>
			            	</div>
		            	</div>
		            	:
		            	<div>
		            		<Row>
		            			<Col span={8}></Col>
		            			<Col span={8} className="infor">
		            				<div>
		            					<span>{ user.fullName }</span>
			            				<Button type="primary" icon="logout" onClick={ this.onLogout }>
											Log out
										</Button>
		            				</div>
		            				<div style={{ margin: "10px 0" }}>
										<Button onClick={ this.onGetCurrentUser }>
											Get Current User
										</Button>
			            				<Button onClick={ this.onGetAllUsers }>
											Get All Users
										</Button>
		            				</div>
		            				<div style={{ margin: "10px 0" }}>
		            					{
		            						listUser.length > 0 ?
		            							<List
													size="small"
													bordered
													dataSource={listUser}
													style={{ textAlign: "left" }}
													renderItem={
														item => 
															<List.Item>
																<b>Full Name:</b> {item.fullName}<br />
																<b>Email:</b> {item.email}<br />
																<b>ID:</b> {item.id}<br />
																<b>Password:</b> {item.password}<br />
																<b>Role:</b> {item.role}
															</List.Item>
													}
												/>
												:
												<div></div>
		            					}
		            				</div>
		            				<div className="error">{ error ? error : '' }</div>
		            			</Col>
		            			<Col span={8}></Col>
		            		</Row>
		            	</div>
            	}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		error: getError(state),
		token: getToken(state),
		user: getUser(state),
		listUser: getListUser(state),
	};
}

const mapDispatchToProps = {
	getLogin: authActions.getLogin,
	getLogout: authActions.getLogout,
	getCurrentUser: authActions.getCurrentUser,
	getAllUsers: authActions.getAllUsers,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Login);
