import React from 'react' 
import { Carousel as Carousel1 } from 'antd';
import 'antd/dist/antd.css';
import first from '../styles/images/first.jpeg'
import second from '../styles/images/second.webp'

const Carousel = () => {
    const contentStyle = {
        height: '30rem',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return(
        <Carousel1 autoplay arrows={true}>
        <div>
          <img src={first} style={contentStyle} alt="reklam1" />
        </div>
        <div>
        <img src={second} style={contentStyle} alt="reklam1"  />
        </div>
      </Carousel1>
    )
}
export default Carousel