import React, {useEffect, useState} from 'react'
import Category from './Category'
import "../../styles/admin-style/DisplayCategories.css"
import {getCategories} from '../../apies/ApiFunctions'
import {backendPath} from '../../config/Config'
import CreateCategoryModalen from './CreateCategoryModal'
import { Alert } from 'antd';
import LoadingIcon from '../LoadingIcon'

const DisplayCategories = ({token}) => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [msgStyle, setMsgStyle] = useState('')
    const [message, setMessage] = useState('')

    useEffect(() => {
      getCategories(setCategories, setIsLoading)
    }, [])

    const handleMessage = (msg, MsgStyle) => {
        setMessage(msg)
        setMsgStyle(MsgStyle)
    }
    //this metho help us to refetch the array from server when some chage accurs
    const reloadCurrentData = () => {
      getCategories(setCategories, setIsLoading)
    }
    const deleteCategory = async(categoryId) => {
        console.log(token)
        await fetch(backendPath + '/api/categories/' + categoryId, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + token
              },

        })
        .then(response => {
            if (response.ok) {
              handleMessage('Category has been deleted!', 'success')
              getCategories(setCategories, setIsLoading)
            }else{
              if(response.status === 403){
                alert('You have been loggedout')
                window.location.reload()
              }else if(response.status === 400){
                response.json()
                .then(data => handleMessage(data.message, 'error'))
              }
  
            }
          })
        .catch(error => console.log(error))
    }
    return(
        <div className="admin-display-categories-body">
            {message && msgStyle ? <Alert className="message" message={message} type={msgStyle} showIcon /> : null}
            <CreateCategoryModalen token={token} handleMessage={handleMessage} reloadCurrentData={reloadCurrentData} />
            {/* //this is the table header */}
            <div className="category-wrapper-header">
                <div className="category-item-header">
                    Category
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
                        <Category obj={item} handleMessage={handleMessage} 
                         token={token} 
                         delete={deleteCategory} 
                         reloadCurrentData={reloadCurrentData} />
                    </div>
              )
            }): <LoadingIcon />}
            
        </div>
    )
}
export default DisplayCategories