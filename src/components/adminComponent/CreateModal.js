import React, {useEffect, useState} from 'react'
import {backendPath} from '../../config/Config'
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import CreateButton from './CreateButton'
const CreateCategoryModalen = () => {
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
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ categoryName: name }),    
        })
        .catch(error => console.log(error))
    }
    return(
        <div>
            <CreateButton onClick={showModal} />
            <Modal 
                className="create-category-modal"
                title="Create a new Category"
                visible={isModalVisible} 
                onOk={handleOk} 
                bodyStyle={{backgroundColor:'#ccc'}}
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