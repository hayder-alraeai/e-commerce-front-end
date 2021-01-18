import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const AuthRoute = ({component, isAuthenticated, ...rest}) => {
    if(isAuthenticated){
        return (
            <Route {...rest} component={component} />
        )
    }else{
        return(
            <Redirect path="/" />
        )
    }
    
}
export default AuthRoute