import React, { useState, useContext, useEffect } from 'react'
import '../styles/Login.css'
import Login_logo from '../styles/images/login.png'
import { useHistory } from "react-router-dom";
import { Alert } from 'antd';
const Login = ({handleLogin, isAuthenticated, message}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [msg, setMsg] = useState('')
    let history = useHistory()
    useEffect(() => {
        if (isAuthenticated) {
            history.push("/")
        }
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        if(username.length < 3 || password.length < 3){
            setMsg('Username and password cannot be empty!')
            return
        }
        handleLogin(username, password, setIsLoading)    
    }

    return(
        <div className="login-body">
            <div className="login-wrapper">
            {message ? <Alert className="message" message={message} type="error" showIcon /> : null}
                <img src={Login_logo} alt="login" />
                {msg ? <Alert className="message" message={msg} type="error" showIcon /> : null}
                <form>
                    <input type="text" placeholder="Email" value={username} onChange={e => setUsername(e.target.value)} required />
                    <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <input type="submit" value="Login" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}
export default Login