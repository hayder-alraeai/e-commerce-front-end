import React, { useEffect, useState } from 'react' 
import DisplayCategories from '../components/adminComponent/DisplayCategories'
import DisplayItems from '../components/adminComponent/DisplayItems'
import '../styles/admin-style/Admin.css'
import {ControlOutlined} from '@ant-design/icons'

const Admin = ({token}) => {
    const [isCategories, setIsCategories] = useState(true)
    const [isItems, setIsItems] = useState(false)
    const [localToken, setLocalToken] = useState('')
    useEffect(() => {
        if (token.length < 20) {
            
            setLocalToken(localStorage.getItem('token'))
        }
        if (token.length > 20) {
            setLocalToken(token)
        }
    }, [])
    const openCategories = () => {
        setIsItems(false)
        setIsCategories(true)
    }
    const openItems = () => {
        setIsItems(true)
        setIsCategories(false)
        console.log(isItems)
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
                            <li onClick={openCategories} >Categories</li>
                            <li onClick={openItems} >Items</li>
                        </ul>
                    </div>
                </div>
                {isCategories ? <div className="admin-content" >
                    <DisplayCategories token={localToken} />
                </div> : 
                <div className="admin-content" >
                    <DisplayItems token={localToken} />
                </div>}
            </div>
        </div>
    )
}
export default Admin