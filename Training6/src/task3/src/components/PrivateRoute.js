import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getToken } from '../redux/selectors/auth';

function PrivateRoute({ component: Component, token , ...rest }) {
    return (
        <Route
            {...rest}
            render = { (props) => 
                {
                    return token ? (
                       <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                            }}
                        />
                    )
                }
            }
        />
    );
}

const mapStateToProps = (state) => {
    return {
        token: getToken(state),
    };
}

export default compose(
    connect(mapStateToProps),
)(PrivateRoute);
