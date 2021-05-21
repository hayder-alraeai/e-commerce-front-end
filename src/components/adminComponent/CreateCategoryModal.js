import React, {useState} from 'react'
import {backendPath} from '../../config/Config'
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import CreateButton from './CreateButton'
const CreateCategoryModalen = ({token, handleMessage, reloadCurrentData}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [categoryName, setCategoryName] = useState({value: ''})
      const handleOk = () => {
        addCategory(categoryName.value)
        setCategoryName({value: ''})
        setIsModalVisible(false);
      };
      const showModal = () => {
        setIsModalVisible(true);
      };
      const handleCancel = () => {
        setIsModalVisible(false);
      };
      const addCategory = async(name) => {
        await fetch(backendPath + '/api/categories', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ categoryName: name }),    
        })
        .then(response => {
          if (response.ok) {
            handleMessage('Category ' + name + ' has been added', 'success')
            reloadCurrentData()
          }else{
            if(response.status === 403){
              alert('You have been loggedout')
              window.location.reload()
            }

          }
        })
        .catch(error => console.log(error))
    }
    return(
        <div>
            <CreateButton onClick={showModal} text="Create new Category" />
            <Modal 
                className="create-category-modal"
                title="Create a new Category"
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}>
                    <input
                        type="text" 
                        placeholder="Category name ..."
                        onChange={e => setCategoryName({value:e.target.value})}
                        value={categoryName.value}
                    />
        </Modal>
        </div>

    )
}
export default CreateCategoryModalen