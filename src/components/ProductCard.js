//This component is responsible for displaying one item
import React from 'react' 
import '../styles/ProductCard.css'

const ProductCard = ({obj}) => {
    const img = "http://localhost:8080/api/images/" + obj.imageId
    return(
        <div className="product-card-body">
            <img src={img}  alt="product" />
            <p className="product-card-description">{obj.productDescription}</p>
            <p className="product-card-price">{obj.productPrice}</p>
            <button className="product-card-button">Show product</button>
        </div>
    )
}
export default ProductCard