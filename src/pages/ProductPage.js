import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {LoadingOutlined} from '@ant-design/icons'
import {getProductById} from '../apies/ProductApiFunctions'
import {backendPath} from '../config/Config'
const ProductPage = () => {
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    let {id} = useParams()

    useEffect(() => {
        getProductById(setProduct, setIsLoading, id)
    }, [])
    
    if(isLoading){
        return(
            <div className="reload-icon">
                <LoadingOutlined />
            </div>
        )
    }
    return(
        <div className='product-body'>
            <img src={backendPath + "/api/images/" + product.imageId} />
            <div className='product-info'>
                <p>{product.productDescription}</p>
                <p>{product.productPrice}</p>
            </div>
        </div>
    )
}
export default ProductPage