import React from 'react'
import { Link } from 'react-router-dom';
import  '../styles/Nav.css'
import {ShoppingCartOutlined} from '@ant-design/icons'
import SearchBar from './SearchBar';
import logo1 from '../styles/images/logo1.png'
const Nav = () => {
    return(
        <div className="header">
            <nav className="header-nav">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                </ul>
            </nav>
            <div className="header-content">
                <div className="header-logo"><img src={logo1} /></div>
                <div className="search-bar"><SearchBar /></div>
                <div className="shopping-cart"><ShoppingCartOutlined /></div>
            </div> 
        </div>
    )
}
export default Nav