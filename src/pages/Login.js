import React, { useState } from 'react'
import '../styles/Login.css'
import Login_logo from '../styles/images/login.png'
import {login} from '../apies/Login'
import Password from 'antd/lib/input/Password'
import { useHistory } from "react-router-dom";
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    let history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        let data = JSON.stringify({username: username, password: password})
         login(data, setIsLoading)
         history.push("/")
        
    }

    return(
        <div className="login-body">
            <div className="login-wrapper">
                <img src={Login_logo} alt="login" />
                <form>
                    <input type="text" placeholder="Email" value={username} onChange={e => setUsername(e.target.value)} />
                    <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="submit" value="Login" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}
export default Login