import {backendPath} from '../config/Config'

export const login = async(data, setIsLoading) => {
    await fetch(backendPath + '/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: data
    })
    .then(response => response.json())
    .then(d => localStorage.setItem('token', d.token))
    .then(() => setIsLoading(false))
    .catch(error => console.log("erro while fetching: hello from me: " + error))
}