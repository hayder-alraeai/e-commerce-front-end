import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import  '../styles/Nav.css'
import {ShoppingCartOutlined} from '@ant-design/icons'
import SearchBar from './SearchBar';
import 'antd/dist/antd.css';
import logo1 from '../styles/images/logo1.png'
import { Badge } from 'antd';
import {UserContext} from '../authentication/UserContext'
const Nav = () => {
    const {isAuthenticated, login, logout} = useContext(UserContext)
    return(
        <div className="header">
            <nav className="header-nav">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                    {isAuthenticated ? <li><Link to='/admin'>Admin</Link></li> : null}
                    {isAuthenticated ? <li onClick={logout}><Link to="/logout">Logout</Link></li> : <li onClick={login}><Link to="/login">Login</Link></li>}
                    
                </ul>
            </nav>
            <div className="header-content">
                <div className="header-logo"><img src={logo1} alt="logo1" /></div>
                <div className="search-bar"><SearchBar /></div>
                <div className="shopping-cart">
                    <Badge count={15}>
                        <span className="head-example" />
                    </Badge>
                    <ShoppingCartOutlined /></div>
            </div> 
        </div>
    )
}
export default Nav