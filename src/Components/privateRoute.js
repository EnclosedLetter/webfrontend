import React, { Component } from "react"
import { Route, Redirect } from "react-router"

const PrivateRoute = ({
    component: Component, ...initialProps}) =>{
    return <Route {...initialProps} 
        render={props => 
            localStorage.getItem('token') ? (<Component {...props} />) : (<Redirect to="/" />)
        }
    />
}
export default PrivateRoute;