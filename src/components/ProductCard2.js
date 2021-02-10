//This component is responsible for displaying one item
import React, {useState} from 'react' 
import '../styles/ProductCard.css'
import {backendPath} from '../config/Config'
import { Redirect } from 'react-router-dom'
import '../styles/ProductCard2.css'
import {HeartOutlined, SwapOutlined, EyeFilled, ShoppingOutlined} from '@ant-design/icons'
import { Rate } from 'antd';
import {useHistory} from 'react-router-dom'

const ProductCard2 = ({obj, handleAddToCart, addToLocalStorge}) => {
    const img = backendPath + "/api/images/" + obj.imageId
    const [isMouseOver, setIsMouseOver] = useState(false)
    const history = useHistory()
    return(
        <div className="card-body">
            <div className="card-header"></div>
            <img src={backendPath + "/api/images/" + obj.imageId} />
            <div className="card-info">
                <div className="card-category">{obj.category.categoryName}</div>
                <div className="card-description">{obj.productDescription}</div>
                <div className="card-price">{obj.productPrice + " SEK"}</div>
                <div className="card-rates"><Rate style={{color:'#c63736', fontSize:15, padding:0}} value={3} disabled  /></div>
            </div>
            <div className="card-footer">
                <HeartOutlined className="heart" />
                <ShoppingOutlined onClick={() => handleAddToCart(obj)} className="add-to-card" />
                <EyeFilled className="eye" onClick={() => history.push('/product/' + obj.id)} />
            </div>
        </div>
    )
}
export default ProductCard2