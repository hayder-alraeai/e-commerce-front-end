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
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {

  }, [isAuthenticated])
  const login = () => {
    setIsAuthenticated(true)
  }
  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="App">
      <div className="container">
        <UserContext.Provider value={{isAuthenticated, login, logout}}>
          <Nav />
        </UserContext.Provider>
        <div className="content-wrapper">
          <Switch>
          <AuthRoute exact path="/admin" isAuthenticated={isAuthenticated} >
            <Admin />
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
                <Login />
            </Route>
            <Route exact path="/categories/:id">
            <Categories/>
                <DisplayProductsByCategoryId />
            </Route>
          </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
