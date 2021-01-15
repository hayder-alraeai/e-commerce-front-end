import React, {useEffect, useState} from 'react'
import Category from './Category'
import "../../styles/admin-style/DisplayCategories.css"
import {getCategories} from '../../apies/ApiFunctions'
import {backendPath} from '../../config/Config'
import CreateCategoryModalen from './CreateModal'

const DisplayCategories = () => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getCategories(setCategories, setIsLoading)
    }, [categories])

    const deleteCategory = async(categoryId) => {
        await fetch(backendPath + '/api/categories/' + categoryId, {
            method: 'DELETE',

        })
        .catch(error => console.log(error))
    }
    return(
        <div className="admin-display-categories-body">
            <CreateCategoryModalen />
            {/* //this is the table header */}
            <div className="category-wrapper-header">
                <div className="category-item-header">
                    Item
                </div>
                <div className="category-item-header">
                    Created
                </div>
                <div className="category-button-header">
                    Edit
                </div>
                <div className="category-button-header">
                    Remove
                </div>
            </div>
            {!isLoading? categories.map(item => {
              return(
                    <div key={item.categoryId}>
                        <Category obj={item} delete={deleteCategory} />
                    </div>
              )
            }): <p>No data</p>}
            
        </div>
    )
}
export default DisplayCategories