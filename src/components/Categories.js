import React, { useEffect, useState } from 'react' 
import '../styles/Categories.css'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async() => {
      await fetch('http://localhost:8080/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .then(() => setIsloading(false))
      .catch(error => console.log(error))
  }
  
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