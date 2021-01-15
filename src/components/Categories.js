import React, { useEffect, useState } from 'react' 
import '../styles/Categories.css'
import {getCategories} from '../apies/ApiFunctions'

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
                <li key={item.categoryId}>{item.categoryName}</li>
              )
            }): <p>No data</p>}
          </ul>
        </div>
    )
}
export default Categories