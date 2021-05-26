// This component is responsibale for displaying list of items in homepage
import React, { useEffect, useState } from 'react' 
import '../styles/DisplayProduct.css'
import ProductCard from './ProductCard'
import {getProducts} from '../apies/ProductApiFunctions'
import LoadingIcon from './LoadingIcon'
import ProductCard2 from './ProductCard2'
import WaitingPanel from './WaitingPanel'

const DisplayProducts = ({handleAddToCart, searchedItems, handleIsLoading}) => {
    const [productsList, setProductslist] = useState([])
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        getProducts(setProductslist, setIsloading)
    }, [])
    return(
        <div className="display-products-body">
            {/* <p>this is the display component!</p> */}
            <div className="display-products">
                {!isLoading  ?  productsList.map(item => {
                    handleIsLoading(isLoading)
                    return(
                        <div className="child" key={item.id}>
                            {/* <ProductCard obj={item} handleAddToCart={handleAddToCart}  /> */}
                            <ProductCard2 obj={item}  handleAddToCart={handleAddToCart} />
                        </div>
                        
                    )
                }): 
                <div>
                    <LoadingIcon />
                </div>
                }
            </div>
        </div>
    )
}
export default DisplayProducts