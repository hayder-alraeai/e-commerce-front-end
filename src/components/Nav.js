import React, {useContext, useState} from 'react'
import { Link , useLocation} from 'react-router-dom';
import  '../styles/Nav.css'
import {ShoppingCartOutlined} from '@ant-design/icons'
import SearchBar from './SearchBar';
import 'antd/dist/antd.css';
import logo1 from '../styles/images/logo1.png'
import { Badge } from 'antd';
import {UserContext} from '../authentication/UserContext'
import MenuComponent from './MenuComponent';
import {useHistory} from 'react-router-dom'
const Nav = ({countItems, searchHandler, togleMenuBarHandler, menuBarToggle}) => {
    const {isAuthenticated, logout} = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    return(
        <div className="header">
            <nav className="header-nav">
                <ul>
                    <li><Link  className={location.pathname === '/' ? 'active' : null} to='/'>Home</Link></li>
                    {isAuthenticated ? <li><Link className={location.pathname === '/admin'? 'active' : null} to='/admin'>Admin</Link></li> : null}
                    {isAuthenticated ? <li onClick={() => {
                        logout()
                    }}><Link to="/logout">Logout</Link></li> : 
                    <li><Link className={location.pathname === '/login' ? 'active' : null}  to="/login">Login</Link></li>}      
                </ul>
            </nav>
            <div className="header-content">
                <div className="header-logo">
                    <img onClick={() => history.push('/')} className="header-logo-image" src={logo1} alt="logo1" />
                    {location.pathname === '/login' ? null :
                        <div className="bars" onClick={togleMenuBarHandler}><i className={menuBarToggle ? 'fas fa-times' : 'fas fa-bars'}></i></div>
                    }
                </div>
                <div className="search-bar"><SearchBar searchHandler={searchHandler} /></div>
                <div className="shopping-cart">
                    <Link to={"/shopping-cart"} >
                        <Badge count={countItems}>
                            <span className="head-example" />
                        </Badge>
                        <ShoppingCartOutlined />
                    </Link>
                </div>
            </div> 
        </div>
    )
}
export default Nav