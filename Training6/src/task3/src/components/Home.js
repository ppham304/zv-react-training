import React, { Component } from 'react';
import { Button, Menu, Icon } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";

import WelcomePage from './WelcomePage';
import UserList from './UserList';
import NoMatch from './NoMatch';
import * as authActions from '../redux/actions/auth'
import { getError, getUser, getListUser } from '../redux/selectors/auth';

class Home extends Component {
	changeState = (position) => {
		this.props.history.push(position);
	}

	onLogout = () => {
		const { getLogout } = this.props;
		getLogout();
	}

    render() {
    	const { user, location } = this.props;
        return (
            <div className="Home">
            	<Menu 
            		mode="horizontal"
            		selectedKeys={ location.pathname === '/home' 
	            		? ['home'] 
	            		: location.pathname === '/home/404' 
	            			? ['']
	            			: ['user'] 
            		}
            	>
					<Menu.Item key="home" onClick={() => this.changeState("/home")}>
						<Icon type="home" />
						Home
					</Menu.Item>
					<Menu.Item key="user" onClick={() => this.changeState("/home/users")}>
						<Icon type="user" />
						Users
					</Menu.Item>
					<Menu.Item key="logout" style={{ float: "right" }}>
						{ user.fullName } - { user.role }
						<Button type="primary" icon="logout" onClick={ this.onLogout }>
							Log out
						</Button>
					</Menu.Item>
				</Menu>
				<Switch>
                    <Route exact path="/home" component={WelcomePage} />
                    <Route path="/home/users" component={UserList} />
                    <Route path="/home/404" component={NoMatch}></Route>
                    <Redirect 
                    	to={{
	                    	pathname: "/home/404"
	                    }}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
		error: getError(state),
		user: getUser(state),
		listUser: getListUser(state),
	};
}

const mapDispatchToProps = {
	getLogout: authActions.getLogout,
	getCurrentUser: authActions.getCurrentUser,
	getAllUsers: authActions.getAllUsers,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Home);
