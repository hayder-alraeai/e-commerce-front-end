import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import LoadingIcon from '../components/LoadingIcon'
import {getProductById} from '../apies/ProductApiFunctions'
import {backendPath} from '../config/Config'
import {ShoppingOutlined, HeartOutlined, CommentOutlined} from '@ant-design/icons'
import { Rate } from 'antd';
import '../styles/ProductPage.css'
import CreateReview from '../components/CreateReview'
import DisplayReviews from '../components/DisplayReviews'
const ProductPage = ({handleAddToCart, isAuthenticated, token}) => {
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isFormHidden, setIsFormHidden] = useState(true)

    let {id} = useParams()

    useEffect(() => {
        getProductById(setProduct, setIsLoading, id)
    }, [])
    
    if(isLoading){
        return(
            <LoadingIcon />
        )
    }
    return(
        <div className='wrapper'>
            <div className='product-body'>
                <div className='image-body'>
                    <img src={backendPath + "/api/images/" + product.imageId} />
                </div>
                <div className='product-info'>
                    <div className='description'>{product.productDescription}</div>
                    <Rate className='stars' style={{color:'#c63736', fontSize:15, padding:0}} value={product.rates} disabled  />
                    <div className='price'>{product.productPrice + ' SEK'}</div>
                    <div className='button-wrapper'>
                        <HeartOutlined className='favorit-button' />
                        <button onClick={() => handleAddToCart(product)} className='purchase-button' ><ShoppingOutlined className='button-icon' /> Add To Cart</button>
                    </div>
                </div>
            </div>
            <div className="reviews-body">
                <div onClick={() => setIsFormHidden(!isFormHidden)} className="Create-review-button">
                    <CommentOutlined />
                    <div>Add Review</div>
                </div>
                {isFormHidden ? null : <CreateReview productId={product.id} setIsFormHidden={setIsFormHidden} />}
                <DisplayReviews productId={product.id} isAuthenticated={isAuthenticated} token={token} />
            </div>
        </div>
    )
}
export default ProductPage