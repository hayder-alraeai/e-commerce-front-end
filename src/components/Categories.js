import React, { useEffect, useState } from 'react' 
import '../styles/Categories.css'
import {getCategories} from '../apies/ApiFunctions'
import { Link } from 'react-router-dom'
import LoadingIcon from './LoadingIcon'

const Categories = ({setCategoryIdHandler, menuBarToggle}) => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getCategories(setCategories, setIsLoading)
  }, [])

    return(
        <div className={menuBarToggle ? 'categories-body active' : 'categories-body'} >
          <div className="categories-header">All Categories</div>
          <ul>
            {!isLoading? categories.map(item => {
              return(
                <li  key={item.categoryId}><Link onClick={() => setCategoryIdHandler(item.categoryId)}  className='category-links' to={"/categories/" + item.categoryId}>{item.categoryName}</Link></li>
              )
            }): 
              <LoadingIcon />
            }
          </ul>
        </div>
    )
}
export default Categories