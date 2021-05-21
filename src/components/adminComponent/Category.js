import React, {useState} from 'react'
import "../../styles/admin-style/Category.css"
import '../../styles/General.css'
import {backendPath} from '../../config/Config'
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons'
const Category = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [categoryName, setCategoryName] = useState({value: ''})
      const handleOk = (categoryId) => {
        updateCategory(categoryId,categoryName.value)
        setCategoryName({value: ''})
        setIsModalVisible(false);
      };
      const showModal = (value) => {
        setCategoryName({value})
        setIsModalVisible(true);
      };
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      const updateCategory = async(categoryId, categoryName) => {
        await fetch(backendPath + '/api/categories/' + categoryId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + props.token
              },
            body: JSON.stringify({ categoryName: categoryName }),    
        })
        .then(response => {
            if (response.ok) {
              props.handleMessage('Category ' + categoryName + ' has been updated', 'success')
              props.reloadCurrentData()
            }else{
              if(response.status === 403){
                alert('You have been loggedout')
                window.location.reload()
              }
  
            }
          })
        .catch(error => console.log(error))
    }
    const convertDate = d => {
      let da = new Date(d);
      return da.toLocaleDateString() + ' ' + da.getHours() + ':' + da.getMinutes()
    }
    return(
            <div className="category-wrapper">
                <Modal 
                    className="create-category-modal"
                    title="Update Category"
                    visible={isModalVisible} 
                    onOk={() => handleOk(props.obj.categoryId)} 
                    bodyStyle={{backgroundColor:'#ccc'}}
                    onCancel={handleCancel}>
                        <input 
                            type="text" 
                            placeholder="Category name ..."
                            onChange={e => setCategoryName({value:e.target.value})}
                            value={categoryName.value}
                        />
                </Modal>
                <div className="category-item">
                    {props.obj.categoryName}
                </div>
                <div className="category-item">
                    {convertDate(props.obj.timeStamp)}
                </div>
                <div onClick={() => {showModal(props.obj.categoryName)}} className="category-button update-color">
                    <EditOutlined />
                </div>
                <div onClick={() => {
                    if(window.confirm("You are about removing " + props.obj.categoryName + " Are you sure?")){
                        props.delete(props.obj.categoryId)
                    }
                    
                }} className="category-button delete-color">
                    <DeleteOutlined />
                </div>
            </div>
            
    )
}
export default Category