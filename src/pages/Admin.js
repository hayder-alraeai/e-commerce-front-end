import React, { useEffect, useState } from 'react' 
import DisplayCategories from '../components/adminComponent/DisplayCategories'
import DisplayItems from '../components/adminComponent/DisplayItems'
import '../styles/admin-style/Admin.css'
import {ControlOutlined} from '@ant-design/icons'
import LoadingIcon from '../components/LoadingIcon'
import DisplayShoppingCart from '../components/adminComponent/DisplayShoppingCart'
import DisplayGeneral from '../components/adminComponent/DisplayGeneral'

const Admin = ({token}) => {
    const [category, setCategory] = useState('general')
    const [localToken, setLocalToken] = useState('')
    useEffect(() => {
        if (token.length < 20) {
            
            setLocalToken(localStorage.getItem('token'))
        }
        if (token.length > 20) {
            setLocalToken(token)
        }
    }, [])
    const SwitchCategories = () => {
        switch(category){
            case 'general':
                return <DisplayGeneral token={localToken} />
            case 'categories':
                return <DisplayCategories token={localToken} />
            case 'items':
                return <DisplayItems token={localToken} />
            case 'shoppingCart':
                return <DisplayShoppingCart token={localToken} />
            default :
                return <LoadingIcon />
        }
    }
    return(
        <div className="admin-body">
            <div className="admin-header">
                <div className='icon'><ControlOutlined /></div>
                <div className="text">Welcome to Control panel</div>
            </div>
            <div className="admin-content-wrapper">
                <div className="admin-aside">
                    <div className="admin-aside-button-wrapper">
                        <ul>
                            <li onClick={() => setCategory('general')}>General</li>
                            <li onClick={() => setCategory('categories')} >Categories</li>
                            <li onClick={() => setCategory('items')} >Items</li>
                            <li onClick={() => setCategory('shoppingCart')} >Shoppingcart</li>
                        </ul>
                    </div>
                </div>
                <div className="admin-content" >
                    <SwitchCategories />
                </div>
            </div>
        </div>
    )
}
export default Admin