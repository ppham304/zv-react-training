import React, { Component } from 'react';
import { List } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getListUser, getIsGettingAllUsers } from '../redux/selectors/auth';

class UserDetail extends Component {

	componentDidUpdate(prevProps) {
		const { loadingUsers, listId, id } = this.props;
		if (!loadingUsers && prevProps.loadingUsers) {
			if (!listId.includes(id)) {
				this.props.history.push('/home/404');
			}
		}
	}
	render() {
    	const { currentUser } = this.props;
        return (
            <div className="UserDetail">
    			<div style={{ margin: "10px 20px 10px 10px" }}>
					<List
						header={<h2 style={{ margin: "0" }}>User Detail</h2>}
						size="small"
						bordered
						dataSource={currentUser}
						style={{ textAlign: "left" }}
						renderItem={
							item => 
								<List.Item style={{ fontSize: "15px" }}>
									<b>Full Name:</b> {item.fullName}<br />
									<b>Email:</b> {item.email}<br />
									<b>ID:</b> {item.id}<br />
									<b>Password:</b> {item.password}<br />
									<b>Role:</b> {item.role}
								</List.Item>
						}
					/>
				</div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const listUser = getListUser(state);
	const currentUser = listUser.filter((user) => {
		return user.id === id;
	});
	return {
		listId: listUser.map(({ id }) => id),
		currentUser: currentUser,
		loadingUsers: getIsGettingAllUsers(state),
		id,
	};
}

export default compose(
	connect(mapStateToProps),
)(UserDetail);
