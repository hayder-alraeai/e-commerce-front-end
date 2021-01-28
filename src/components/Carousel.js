import React from 'react' 
import { Carousel as Carousel1 } from 'antd';
import 'antd/dist/antd.css';
import '../styles/Carousel.css'
// import first from '../styles/images/first.jpeg'
// import second from '../styles/images/second.webp'

const Carousel = () => {
    const contentStyle = {
        height: '30rem',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return(
        <Carousel1 autoplay className="carousel-body" >
        <div>
          <img className="content-style" src='https://via.placeholder.com/800x400.png'  alt="reklam1" />
        </div>
        <div>
           <img className="content-style" src='https://via.placeholder.com/800x400/09f/fff.pngC/O%20https://placeholder.com/'  alt="reklam1"  />
        </div>
      </Carousel1>
    )
}
export default Carousel