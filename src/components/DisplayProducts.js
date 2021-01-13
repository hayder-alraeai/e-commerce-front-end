// This component is responsibale for displaying list of items in homepage
import React from 'react' 
import '../styles/DisplayProduct.css'
import ProductCard from './ProductCard'
import item1 from '../styles/images/item.webp'
import item2 from '../styles/images/item2.webp'
import item3 from '../styles/images/item3.webp'
import item4 from '../styles/images/item4.webp'
const DisplayProducts = () => {
    return(
        <div className="diplay-products-body">
            <p>this is the display component!</p>
            <div className="display-products">
                <ProductCard image={item1}/>
                <ProductCard image={item2} />
                <ProductCard image={item3} />
                <ProductCard image={item4} />
            </div>
        </div>
    )
}
export default DisplayProducts