//This component is responsible for displaying one item
import React, {useState} from 'react' 
import '../styles/ProductCard.css'
import {backendPath} from '../config/Config'
import { Redirect } from 'react-router-dom'

const ProductCard = ({obj, handleAddToCart, addToLocalStorge}) => {
    const img = backendPath + "/api/images/" + obj.imageId
    const [isMouseOver, setIsMouseOver] = useState(false)

    return(
        <div className="product-card-body" onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)} >
            {isMouseOver ? <div>
                <img src={img}  alt="product" />
                <p className="product-card-description">{obj.productDescription}</p>
                <p className="product-card-price">{obj.productPrice + " SEK"}</p>
                <button onClick={() => <Redirect path={'/product/' + obj.id} />} className="product-card-button">Show product</button> 
                <button onClick={() => {handleAddToCart(obj)}} className="product-card-button " >Add to cart</button>
            </div>:
                <div>
                    <img src={img}  alt="product" />
                    <p className="product-card-description">{obj.productDescription}</p>
                    <p className="product-card-price">{obj.productPrice + " SEK"}</p>
                    <button onClick={() => <Redirect path={'/product/' + obj.id} />} className="product-card-button show-card-info ">Show product</button>
                    <button onClick={() => handleAddToCart(obj)} className="product-card-button show-card-info " >Add to cart</button>
                </div>
            }
        </div>
    )
}
export default ProductCard