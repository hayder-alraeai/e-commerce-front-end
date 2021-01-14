// This component is responsibale for displaying list of items in homepage
import React, { useEffect, useState } from 'react' 
import '../styles/DisplayProduct.css'
import ProductCard from './ProductCard'
import item1 from '../styles/images/item.webp'
import item2 from '../styles/images/item2.webp'
import item3 from '../styles/images/item3.webp'
import item4 from '../styles/images/item4.webp'
const DisplayProducts = () => {
    const [productsList, setProductslist] = useState([])
    const [isLoading, setIsloading] = useState(true)
    useEffect(() => {
        getProducts()
        
    }, [])

    const getProducts = async () => {
        await fetch('http://localhost:8080/api/products')
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
                {/* <ProductCard image={item1}/>
                <ProductCard image={item2} />
                <ProductCard image={item3} />
                <ProductCard image={item4} /> */}
            </div>
        </div>
    )
}
export default DisplayProducts