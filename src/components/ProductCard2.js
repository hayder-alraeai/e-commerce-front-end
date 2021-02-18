//This component is responsible for displaying one item
import React, {useState} from 'react' 
import '../styles/ProductCard.css'
import {backendPath} from '../config/Config'
import '../styles/ProductCard2.css'
import {HeartOutlined, SwapOutlined, EyeFilled, ShoppingOutlined} from '@ant-design/icons'
import { Rate } from 'antd';
import {useHistory} from 'react-router-dom'
import { Alert } from 'antd';

const ProductCard2 = ({obj, handleAddToCart, addToLocalStorge}) => {
    const [msg, setMsg] = useState('')
    const history = useHistory()
    return(
        <div className="card-body">
            {msg ? <div className="card-header"><Alert className="message" message={msg} type='success' showIcon /></div> : null}
            <img src={backendPath + "/api/images/" + obj.imageId} />
            <div className="card-info">
                <div className="card-category">{obj.category.categoryName}</div>
                <div className="card-description">{obj.productDescription}</div>
                <div className="card-price">{obj.productPrice + " SEK"}</div>
                <div className="card-rates"><Rate style={{color:'#c63736', fontSize:15, padding:0}} value={obj.rates} disabled  /></div>
            </div>
            <div className="card-footer">
                <HeartOutlined className="heart" />
                <ShoppingOutlined onClick={() => {
                    handleAddToCart(obj)
                    setMsg('Item added')
                    }} className="add-to-card" />
                <EyeFilled className="eye" onClick={() => history.push('/product/' + obj.id)} />
            </div>
        </div>
    )
}
export default ProductCard2