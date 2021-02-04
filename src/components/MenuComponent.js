import React, { useEffect, useState } from 'react'
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { getCategories } from '../apies/ApiFunctions';
import LoadingIcon from './LoadingIcon';

const MenuComponent = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories(setCategories, setIsLoading)
    }, [])
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return(
        <div style={{ width: 256 }}>
                <Button type="ghost" onClick={toggleCollapsed}  >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
                <Menu
                mode="inline"
                theme="light"
                hidden={collapsed}
                >
                    {!isLoading ? categories.map(item => {
                        return(
                        <Menu.Item key={item.categoryId} >
                            <Link className='category-links' to={"/categories/" + item.categoryId}>{item.categoryName}</Link>
                        </Menu.Item>
                        )
                    }) : <LoadingIcon />}

                </Menu>
      </div>
    )
}
export default MenuComponent