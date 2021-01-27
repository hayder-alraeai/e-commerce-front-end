//This component is responsible for displaying one item
import React, {useState} from 'react' 
import '../styles/ProductCard.css'
import {backendPath} from '../config/Config'

const ProductCard = ({obj}) => {
    const img = backendPath + "/api/images/" + obj.imageId
    const [isMouseOver, setIsMouseOver] = useState(false)

    return(
        <div className="product-card-body" onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)} >
            {isMouseOver ? <div>
                <img src={img}  alt="product" />
                <p className="product-card-description">{obj.productDescription}</p>
                <p className="product-card-price">{obj.productPrice + " SEK"}</p>
                <button className="product-card-button">Show product</button> 
            </div>:
                <div>
                    <img src={img}  alt="product" />
                    <p className="product-card-description">{obj.productDescription}</p>
                    <p className="product-card-price">{obj.productPrice + " SEK"}</p>
                    <button className="product-card-button show-card-info ">Show product</button>
                </div>
            }
        </div>
    )
}
export default ProductCard