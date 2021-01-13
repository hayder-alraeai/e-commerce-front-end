import Home from './pages/Home'
import './styles/App.css';
import {Switch, Route, Link} from 'react-router-dom'
import Product from './pages/Product';
import Nav from './components/Nav';
import { Content } from 'antd/lib/layout/layout';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Nav />
        <div className="content-wrapper">
          <Categories/> 
          <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/product">
                <Product />
            </Route>
          </Switch>
          </div>
      </div>
    </div>
  );
}

export default App;
