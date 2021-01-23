import React, { useEffect, useState } from 'react'
import {Route, Redirect, useHistory} from 'react-router-dom'

const AuthRoute = ({component, token, isAuthenticated, ...rest}) => {
    if(isAuthenticated){
        return (
            <Route {...rest} component={component} token={token} />
        )
    }else{
        return(
            <Redirect path="/" />
        )
    }
    
}
export default AuthRoute