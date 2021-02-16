import React, { useEffect, useState } from 'react' 
import { Carousel as Carousel1 } from 'antd';
import 'antd/dist/antd.css';
import '../styles/Carousel.css'
import {getCarouselImages} from '../apies/CarouselImagesApi'
import {backendPath} from '../config/Config'
import LoadingIcon from '../components/LoadingIcon'
const Carousel = () => {
  const [carouselImages, setCarouselImages] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    getCarouselImages(setCarouselImages, setIsLoading)
  }, [])
    const contentStyle = {
        height: '30rem',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return(
        <Carousel1 autoplay className="carousel-body" >
            {isLoading ? <LoadingIcon /> :
              carouselImages.map(image => {
                return(
                  <div>
                      <img className="content-style" src={backendPath + "/api/images/" + image.carouselImageId}  alt="reklam1" />
                  </div>
                )
              })
            }
      </Carousel1>
    )
}
export default Carousel