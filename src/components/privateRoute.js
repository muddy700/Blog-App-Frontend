import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    return (
        <Route {...rest} render={props => isLoggedIn ? (
            <Component {...props} /> ) : 
            (<Redirect to="/login" />)} />
    )
}

export default PrivateRoute

