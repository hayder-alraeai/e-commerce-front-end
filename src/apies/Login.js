import {backendPath} from '../config/Config'

export const login = async(data, setIsLoading, setIsAuthenticated, history, setToken) => {
    await fetch(backendPath + '/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: data
    })
    .then(result => {
        if(result.ok){
            return result.json()
        }else{
            alert("username or passord is unconrrect!")
            throw new Error(result.status)
        }
    })
    .then(d => {
        if(d.token.length < 10){
            return
        }else{
            localStorage.setItem('token', d.token)
            setIsAuthenticated(true)
            setToken(d.token)
            setIsLoading(false)
            history.push('/')
        }
    })
    // .then(response => response.json())
    // .then(d => {
    //     localStorage.setItem('token', d.token)
    //     setIsAuthenticated(true)
    //     setIsLoading(false)
    // })
    .catch(error => console.log(error.message))
}