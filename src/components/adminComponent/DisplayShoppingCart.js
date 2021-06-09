import React, { useEffect, useState } from 'react'
import '../../styles/admin-style/DisplayShoppingCart.css'
import {DeleteOutlined, EyeOutlined, SendOutlined, EditOutlined} from '@ant-design/icons'
import {getOrders, deleteOrders} from '../../apies/OrderApi'
import LoadingIcon from '../LoadingIcon'
import '../../styles/General.css'
import { Pagination, Collapse } from 'antd';
import OrderCard from './OrderCard'
const DisplayShoppingCart = ({token}) => {
    const { Panel } = Collapse;
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getOrders(setOrders, setIsLoading, token)
    }, [])
    const converDate = d => {
        let date =  new Date(d)
        return date.toLocaleDateString()  + ' ' + date.getHours() + ':' + date.getMinutes()
    }
    const handleDelete = async(orderId) => {
        if(window.confirm("You are about removing this order! Are you sure?")){
           await deleteOrders(orderId, token)
           await getOrders(setOrders, setIsLoading, token)
        }    
    }
    return(
        <div className="admin-display-order-body">
            {/* //this is the table header */}
            <div className="order-wrapper-header">
                <div className="order-item-header">
                    Email
                </div>
                <div className="order-item-header">
                    Products
                </div>
                <div className="order-item-header">
                    Created
                </div>
                <div className="order-item-header">
                    Status
                </div>
                <div className="order-button-header">
                    Edit
                </div>
                <div className="order-button-header">
                    Remove
                </div>
                <div className="order-button-header">
                    View
                </div>
                <div className="order-button-header">
                    Shipp
                </div>
            </div>
            {isLoading ? <LoadingIcon /> :    
                orders.map(item => {
                        return(
                            <Collapse bordered={false} style={{paddingBottom: 0}}>
                                <Panel
                                style={{padding:0}}
                                header={
                                            <div key={item.id} className="order-wrapper-body">
                                                <div>{item.email}</div>
                                                <div>{item.orderProducts.length}</div>
                                                <div>{converDate(item.timeStamp)}</div>
                                                <div>{item.orderStatus}</div>
                                                <div className='order-button update-color'><EditOutlined /></div>
                                                <div onClick={() => {
                                                        handleDelete(item.id)
                                                    }} className='order-button delete-color' ><DeleteOutlined/></div>
                                                <div className='order-button update-color' ><EyeOutlined /></div>
                                                <div className='order-button confirm-color' ><SendOutlined /></div>
                                                </div>
                                } key={item.id}>
                                    <OrderCard item={item} />
                                </Panel>
                             </Collapse>
                        )
                    })}
                    {/* <Pagination defaultCurrent={1} total={1} /> */}
        </div>
    )
}
export default DisplayShoppingCart