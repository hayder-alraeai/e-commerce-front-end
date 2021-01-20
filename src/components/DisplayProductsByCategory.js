// This component is responsibale for displaying list of items in homepage
import React, { useEffect, useState } from 'react' 
import '../styles/DisplayProduct.css'
import ProductCard from './ProductCard'
import {getProductsByCategoryId} from '../apies/ProductApiFunctions'
const DisplayProductsByCategory = ({categoryId}) => {
    const [productsList, setProductslist] = useState([])
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        getProductsByCategoryId(setProductslist, setIsloading, categoryId)
        
    }, [])
    
    return(
        <div className="display-products-body">
            <p>this is the display component!</p>
            <div className="display-products">
                {!isLoading ?  productsList.map(item => {
                    return(
                        <div className="child" key={item.id}>
                            <ProductCard obj={item} />
                        </div>
                        
                    )
                }): <p>No data</p>}
            </div>
        </div>
    )
}
export default DisplayProductsByCategory