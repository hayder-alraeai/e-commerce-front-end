//This component is responsible for displaying one item
import React from 'react' 
import '../styles/ProductCard.css'

const ProductCard = ({image}) => {
    return(
        <div className="product-card-body">
            <img src={image} />
            <p className="product-card-description">This is the discription for this product lorem lorem lorem</p>
            <p className="product-card-price">100000</p>
            <button className="product-card-button">Show product</button>
        </div>
    )
}
export default ProductCard