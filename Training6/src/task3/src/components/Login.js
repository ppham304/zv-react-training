import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as authActions from '../redux/actions/auth'
import { getError, getToken } from '../redux/selectors/auth';

class Login extends Component {
    componentDidMount() {
        const { token } = this.props;
        if(token) {
            this.props.history.push('/home');
        }
    }

    componentDidUpdate() {
    	const { token } = this.props;
    	if(token) {
    		this.props.history.push('/home');
    	}
    }

    onLogIn = () => {
        const { getLogin } = this.props;
        const user = {
            email: this.username.input.value,
            password: this.password.input.value,
        };
        getLogin(user);
    }

    render() {
        const { error } = this.props;
        return (
            <div className="Login">
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: getError(state),
        token: getToken(state),
    };
}

const mapDispatchToProps = {
    getLogin: authActions.getLogin,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Login);
