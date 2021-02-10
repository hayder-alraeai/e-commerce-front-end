import React, { useEffect, useState } from 'react' 
import '../styles/Home.css'
import '../styles/App.css'
import {CheckOutlined} from '@ant-design/icons'
import Carousel from '../components/Carousel'
import DisplayProducts from '../components/DisplayProducts'
const Home = ({handleAddToCart}) => {
    return(
        <div className="home-body">
            <div className="home-upper-text">
                <div><p><CheckOutlined style={{color: 'green'}} /><span>some text here</span></p></div>
                <div><p><CheckOutlined style={{color: 'green'}}  /><span>some text here</span></p></div>
            </div>
            <Carousel />
            <DisplayProducts handleAddToCart={handleAddToCart}  />
        </div>
    )
}
export default Home