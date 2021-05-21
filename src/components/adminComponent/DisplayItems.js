import React, { useEffect, useState } from 'react'
import {getProducts} from '../../apies/ProductApiFunctions'
import 'antd/dist/antd.css';
import { Alert } from 'antd';
import LoadingIcon from '../LoadingIcon'
import '../../styles/admin-style/DisplayItems.css'
import '../../styles/General.css'
import CreateProduct from './CreateProduct';
import {backendPath} from '../../config/Config'
import { DeleteOutlined} from '@ant-design/icons'
import {deleteProduct} from '../../apies/ProductApiFunctions'
import UpdateProduct from './UpdateProduct';
const DisplayItems = ({token}) => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [msgStyle, setMsgStyle] = useState('')
    const [message, setMessage] = useState('')
    useEffect(() => {
        getProducts(setProducts, setIsLoading)
    }, [])
    const reloadProductsList = () => {
        getProducts(setProducts, setIsLoading)
    }
    const handleMessage = (msg, MsgStyle) => {
        setMessage(msg)
        setMsgStyle(MsgStyle)
    }
    if(isLoading){
        return(
            <LoadingIcon />
        )
    }
    return(
        <div className="display-items-body">
            {message && msgStyle ? <Alert className="message" message={message} type={msgStyle} showIcon /> : null}
            <CreateProduct handleMessage={handleMessage} token={token} reloadProductsList={reloadProductsList} />
            <div className="display-items-content">
                <div className="display-items-content-header">
                    <div className="img">Image</div>
                    <div className="desc">Description</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Created</div>
                    <div>Edit</div>
                    <div className='delete-header'>Delete</div>
                </div>
                {isLoading? null : 
                    products.map(item => {
                        return(
                            <div key={item.id} className="display-items-content-body">
                            <div className="img"><img src={backendPath + "/api/images/" + item.imageId} alt="Item" /></div>
                                <div className="desc">{item.productDescription}</div>
                                <div>{item.category.categoryName}</div>
                                <div>{item.productPrice}</div>
                                <div>{new Date(item.creationTime).toLocaleDateString()}</div>
                                <div className="item-button update-color"><UpdateProduct obj={item} token={token} reloadProductsList={reloadProductsList} /> </div>
                                <div className="item-button delete-color" onClick={ async() => {
                                    if (window.confirm("You are about removing a product! Are you sure?")) {
                                        await deleteProduct(item.id, token)
                                        reloadProductsList()
                                    }       
                                }} ><DeleteOutlined /></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default DisplayItems