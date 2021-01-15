import Home from './pages/Home'
import './styles/App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Product from './pages/Product';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Nav />
        <div className="content-wrapper">
          <Switch>
          <Route exact path="/admin">
                <Admin />
          </Route>
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
          </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
