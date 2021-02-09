// This component is responsibale for displaying list of items in homepage
import React, { useEffect, useState } from 'react' 
import '../styles/DisplayProduct.css'
import ProductCard2 from './ProductCard2'
import {getProductsByCategoryId} from '../apies/ProductApiFunctions'
import LoadingIcon from './LoadingIcon'
const DisplayProductsByCategory = ({categoryIdLocal, handleAddToCart}) => {
    const [productsList, setProductslist] = useState([])
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        getProductsByCategoryId(setProductslist, setIsloading, categoryIdLocal) 
        
    }, [productsList])
    
    return(
        <div className="display-products-body">
            <div className="display-products">
                {!isLoading ?  productsList.map(item => {
                    return(
                        <div className="child" key={item.id}>
                            <ProductCard2 handleAddToCart={handleAddToCart} obj={item} />
                        </div>
                        
                    )
                }): <LoadingIcon />}
            </div>
        </div>
    )
}
export default DisplayProductsByCategory