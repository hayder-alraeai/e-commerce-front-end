import React, { useEffect, useState } from 'react' 
import '../styles/Categories.css'
import {getCategories} from '../apies/ApiFunctions'
import { Link } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getCategories(setCategories, setIsLoading)
  }, [])

    return(
        <div className="categories-body">
          <div className="categories-header">All Categories</div>
          {console.log(categories)}
          <ul>
            {!isLoading? categories.map(item => {
              return(
                <li key={item.categoryId}><Link to={"/categories/" + item.categoryId}>{item.categoryName}</Link></li>
              )
            }): <p>No data</p>}
          </ul>
        </div>
    )
}
export default Categories