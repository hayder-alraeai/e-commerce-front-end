import React from 'react' 
import '../styles/Home.css'
import '../styles/App.css'
import {CheckOutlined} from '@ant-design/icons'
import Carousel from '../components/Carousel'
const Home = () => {
    return(
        <div className="home-body">
            <div className="home-upper-text">
                <div><p><CheckOutlined style={{color: 'green'}} /><span>some text here</span></p></div>
                <div><p><CheckOutlined style={{color: 'green'}}  /><span>some text here</span></p></div>
            </div>
            <Carousel />
            <p>this is the home page!</p>
        </div>
    )
}
export default Home