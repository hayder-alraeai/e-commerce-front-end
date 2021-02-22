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
import {  isExpired } from "react-jwt";
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';
import ShoppingCart from './pages/ShoppingCart';
import {getProducts} from '../src/apies/ProductApiFunctions'
import Search from '../src/pages/Search';
function App() {
  let history = useHistory()
  const [token, setToken] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [message, setMessage] = useState('')
  const [addToCart, setAddToCart] = useState([])
  const [categoryId, setCategoryId] = useState('')
  const [countItems, setCountItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [searchedItems, setSearchedItems] = useState([])
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    checkIsLoggedIn()
  },[categoryId, countItems])
  const cleanShoppingCart = () => {
    setAddToCart([]) 
    setCountItems(0)
    setTotalPrice(0)
  }
  const searchHandler = sw => {
    getProducts(setProducts, setIsLoading)
    const regex = new RegExp(sw + "*")
    let si = products.filter(item => {
        return regex.test(item.productDescription)
    })
    setSearchedItems(si)
  }
  const setCategoryIdHandler = categoryId => {
    setCategoryId(categoryId)
  }
  const handleRemoveItemFromShoppingCart = item => {
    setAddToCart(addToCart.filter(i => i.id !== item.id))
  }
  const handleTotalItemsInNavBarAndTotalPrice = (payload, obj) => {
        if(payload === 'plus'){
          addToCart.map(item => {
            if(item.id === obj.id){
              item.quantity ++
            }
        })
        setAddToCart(addToCart)
        setCountItems(items => items + 1)
        setTotalPrice(items => items + obj.productPrice)
      }else{
          addToCart.map(item => {
            if(item.id === obj.id){
              item.quantity --
            }
          })
          setAddToCart(addToCart)
          setCountItems(items => items - 1)
          setTotalPrice(items => items - obj.productPrice)
          if(obj.quantity === 0){
            handleRemoveItemFromShoppingCart(obj)
          }
        
      }
  }

  const handleAddToCart = obj => {
        if(!addToCart.find(s => s.id === obj.id)){
          obj.quantity ++
          setTotalPrice(items => items + obj.productPrice)
          setAddToCart(currentItems => [...currentItems, obj])
          setCountItems(items => items + 1)
        }else{
          addToCart.map(item => {
              if(item.id === obj.id){
                item.quantity ++
              }
          })
          setTotalPrice(items => items + obj.productPrice)
          setAddToCart(addToCart)
          setCountItems(items => items + 1)
        }
  }
  const addToLocalStorge = () => {
    localStorage.setItem('shopingCart', addToCart)
  }

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
      // history.push("/login")
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
          <Nav countItems={countItems} searchHandler={searchHandler} />
        </UserContext.Provider>
        <div className="content-wrapper">
          <Switch>
          <AuthRoute exact path="/admin" isAuthenticated={isAuthenticated} >
            <Admin token={token} />
          </AuthRoute>
          </Switch>
          <Switch>
            <Route exact path="/" >
            <Categories setCategoryIdHandler={setCategoryIdHandler} /> 
                <Home handleAddToCart={handleAddToCart} searchedItems={searchedItems} />
            </Route>
            <Route exact path="/product">
            <Categories setCategoryIdHandler={setCategoryIdHandler}/> 
                <Product />
            </Route>
            <Route exact path="/login">
                <Login handleLogin={handleLogin} isAuthenticated={isAuthenticated} message={message} />
            </Route>
            <Route exact path="/categories/:id">
            <Categories setCategoryIdHandler={setCategoryIdHandler}/>
                <DisplayProductsByCategoryId handleAddToCart={handleAddToCart} categoryId={categoryId} />
            </Route>
            <Route exact path="/product/:id">
                <ProductPage handleAddToCart={handleAddToCart} isAuthenticated={isAuthenticated} token={token} />
            </Route>
            <Route exact path="/search">
                <Search searchedItems={searchedItems} handleAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/shopping-cart">
                <ShoppingCart 
                addToCart={addToCart} 
                totalPrice={totalPrice} 
                handleTotalItemsInNavBarAndTotalPrice={handleTotalItemsInNavBarAndTotalPrice}
                cleanShoppingCart={cleanShoppingCart} />
            </Route>
          </Switch>
          </div>
          <Footer />
      </div>
    </div>
  );
}

export default App;
