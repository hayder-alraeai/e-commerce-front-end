import React from 'react'
import { Link } from 'react-router-dom';
import  '../styles/Nav.css'
import {ShoppingCartOutlined} from '@ant-design/icons'
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
                <div className="header-logo">Logo</div>
                <div className="search-bar">search bar</div>
                <div className="shopping-cart"><ShoppingCartOutlined /></div>
            </div> 
        </div>
    )
}
export default Nav