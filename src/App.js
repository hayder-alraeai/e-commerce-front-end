import Home from './pages/Home'
import './styles/App.css';
import {Switch, Route} from 'react-router-dom'
import Product from './pages/Product';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Admin from './pages/Admin';
import DisplayProductsByCategoryId from './pages/DisplayProductsByCategory';
import { useEffect, useState } from 'react';
import AuthRoute from './authentication/AuthRoute';
import {UserContext} from './authentication/UserContext'
import Login from './pages/Login';
import {login} from './apies/Login'
import { useHistory } from "react-router-dom";
import { decodeToken, isExpired } from "react-jwt";
import ProductPage from './pages/ProductPage';
function App() {
  let history = useHistory()
  const [token, setToken] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [message, setMessage] = useState('')
  useEffect(() => {
    checkIsLoggedIn()
  }, [])

  const checkIsLoggedIn = () => {
    let t = ''
    try{
     t = localStorage.getItem('token')
    }catch(error){
      alert(error)
    }
    if(!isExpired(t)){
      setToken(localStorage.getItem('token'))
      setIsAuthenticated(true)
      return true
    }else{
      setIsAuthenticated(false)
      try{
        localStorage.removeItem('token')
      }catch(error){
        console.log(error)
      }
      history.push("/login")
      return false
    }
    
  }
  const handleLogin = (username, password, setIsLoading) => {
    let data = JSON.stringify({username: username, password: password})
      login(data, setIsLoading, setIsAuthenticated, history, setToken, setMessage)
  }
  const logout = () => {
    try {
      localStorage.removeItem('token')
      history.push("/login")
    } catch (error) {
      alert(error)
    }
    setIsAuthenticated(false)
  }

  return (
    <div className="App">
      <div className="container">
        <UserContext.Provider value={{isAuthenticated, handleLogin, logout}}>
          <Nav />
        </UserContext.Provider>
        <div className="content-wrapper">
          <Switch>
          <AuthRoute exact path="/admin" isAuthenticated={isAuthenticated} >
            <Admin token={token} />
          </AuthRoute>
          </Switch>
          <Switch>
            <Route exact path="/" >
            <Categories/> 
                <Home />
            </Route>
            <Route exact path="/product">
            <Categories/> 
                <Product />
            </Route>
            <Route exact path="/login">
            <Categories/> 
                <Login handleLogin={handleLogin} isAuthenticated={isAuthenticated} message={message} />
            </Route>
            <Route exact path="/categories/:id">
            <Categories/>
                <DisplayProductsByCategoryId />
            </Route>
            <Route exact path="/product/:id">
                <ProductPage />
            </Route>
          </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
