import React, { useEffect, useState } from 'react'
import {getProducts} from '../../apies/ProductApiFunctions'
import 'antd/dist/antd.css';
import {LoadingOutlined} from '@ant-design/icons'
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
    useEffect(() => {
        getProducts(setProducts, setIsLoading)
    }, [products])

    if(isLoading){
        return(
            <div className="reload-icon">
                <LoadingOutlined />
            </div>
        )
    }
    return(
        <div className="display-items-body">
            <CreateProduct token={token} />
            <div className="display-items-content">
                <div className="display-items-content-header">
                    <div className="img">Image</div>
                    <div className="desc">Description</div>
                    <div>Category</div>
                    <div>Price</div>
                    <div>Created</div>
                    <div>Edit</div>
                    <div>Delete</div>
                </div>
                {isLoading? null : 
                    products.map(item => {
                        return(
                            <div key={item.id} className="display-items-content-body">
                            <div className="img"><img src={backendPath + "/api/images/" + item.imageId} alt="Item" /></div>
                                <div className="desc">{item.productDescription}</div>
                                <div>{item.category.categoryName}</div>
                                <div>{item.productPrice}</div>
                                <div>Created</div>
                                <div className="item-button update-color"><UpdateProduct obj={item} token={token} /> </div>
                                <div className="item-button delete-color" onClick={() => {
                                    if (window.confirm("You are about removing a product! Are you sure?")) {
                                        deleteProduct(item.id, token)
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