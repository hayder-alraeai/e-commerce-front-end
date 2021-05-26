import React, { useEffect, useState } from 'react' 
import '../styles/Categories.css'
import {getCategories} from '../apies/ApiFunctions'
import { Link, useLocation } from 'react-router-dom'
import LoadingIcon from './LoadingIcon'
const Categories = ({setCategoryIdHandler, menuBarToggle}) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [elementId, setElementId] = useState('')
  useEffect(() => {
    getCategories(setCategories, setIsLoading)
  }, [])
  const location = useLocation()
    return(
        <div className={menuBarToggle ? 'categories-body active' : 'categories-body'} >
          <div className="categories-header">All Categories</div>
          <ul>
            <li><Link 
              to={'/'}
              onClick={() => setElementId('all')}
              className={location.pathname === '/' ? 'category-links active' : 'category-links'}
            >All</Link></li>
            {!isLoading? categories.map(item => {
              return(
                <li  key={item.categoryId}><Link onClick={() => {
                  setElementId(item.categoryId)
                  setCategoryIdHandler(item.categoryId)
                }}  className={elementId == item.categoryId && location.pathname !== '/' ? 'category-links active' : 'category-links'} to={"/categories/" + item.categoryId}>{item.categoryName}</Link></li>
              )
            }): 
              <LoadingIcon />
            }
          </ul>
        </div>
    )
}
export default Categories