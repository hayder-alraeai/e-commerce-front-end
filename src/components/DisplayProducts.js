// This component is responsibale for displaying list of items in homepage
import React, { useEffect, useState } from 'react' 
import '../styles/DisplayProduct.css'
import ProductCard from './ProductCard'
import {backendPath} from '../config/Config'
const DisplayProducts = () => {
    const [productsList, setProductslist] = useState([])
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        getProducts()
        
    }, [])

    const getProducts = async () => {
        await fetch(backendPath + '/api/products')
        .then(response => response.json())
        .then(data => setProductslist(data))
        .then(() => setIsloading(false))
        .catch(error => console.log(error))
    }
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
export default DisplayProducts