import React, { useEffect, useState } from 'react' 
import '../styles/Home.css'
import '../styles/App.css'
import {CheckOutlined} from '@ant-design/icons'
import Carousel from '../components/Carousel'
import DisplayProducts from '../components/DisplayProducts'
import WaitingPanel from '../components/WaitingPanel'
const Home = ({handleAddToCart, searchedItems}) => {
    const [isLoading, setIsLoading] = useState(true)
    const handleIsLoading = (value) => {
        setIsLoading(value)
    }
    return(
        <div className="home-body">
            {isLoading ? <WaitingPanel /> : null }                         
                    <div className="home-upper-text">
                        <div><p><CheckOutlined style={{color: 'green'}} /><span>some text here</span></p></div>
                        <div><p><CheckOutlined style={{color: 'green'}}  /><span>some text here</span></p></div>
                    </div>
                    <Carousel />
                    <DisplayProducts handleAddToCart={handleAddToCart} searchedItems={searchedItems} handleIsLoading={handleIsLoading} />
            
        </div>
    )
}
export default Home