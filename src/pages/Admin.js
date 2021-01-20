import React, { useEffect, useState } from 'react' 
import DisplayCategories from '../components/adminComponent/DisplayCategories'
import DisplayItems from '../components/adminComponent/DisplayItems'
import '../styles/admin-style/Admin.css'
import {ControlOutlined} from '@ant-design/icons'
import { useHistory } from "react-router-dom";
const Admin = () => {
    const [isCategories, setIsCategories] = useState(true)
    const [isItems, setIsItems] = useState(false)
    let history = useHistory()
    useEffect(() => {
        if (localStorage.getItem('token').length === 0) {
            history.push("/")
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
            <ControlOutlined />
                Welcom to Control panel</div>
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
                    <DisplayCategories />
                </div> : 
                <div className="admin-content" >
                    <DisplayItems />
                </div>}
            </div>
        </div>
    )
}
export default Admin