import React, {useEffect, useState} from 'react'
import CreateButton from './CreateButton'
import { Modal } from 'antd';
import {addProduct} from '../../apies/ProductApiFunctions'
import {getCategories} from '../../apies/ApiFunctions'
import '../../styles/admin-style/CreateProduct.css'
const CreateProduct = ({token, handleMessage}) => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    useEffect(() => {
        getCategories(setCategories, setIsLoading)
    },[])
    const showModal = () => {
      setIsModalVisible(true);
    };
    const handleSubmit = e => {
        e.preventDefault();
        let data = new FormData();
        data.append('image', image)
        data.append('categoryId', category)
        data.append('productDescription', description)
        data.append('productPrice', price)
        addProduct(data, token, handleMessage)
        setIsModalVisible(false)
    }
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return(
        <div>
            <CreateButton onClick={showModal} text="Add new Product" />
            <Modal title="Add new product" footer={false} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <form>
                    <textarea placeholder='Description ...' value={description} onChange={e => setDescription(e.target.value)} />
                    <input type='number' placeholder='Price' value={price} onChange={e => setPrice(e.target.value)} />
                    <input type="file" onChange={e => setImage(e.target.files[0])} required />
                    <select value={category} onChange={e => setCategory(e.target.value)} defaultValue='Choose Category' required='true'>
                    {isLoading ? <p>No data</p> : 
                        categories.map(item => {
                            return(
                                <option key={item.categoryId} value={item.categoryId}>{item.categoryName}</option>
                            )
                        })
                    }
                    </select>
                    <input type='submit' value='Save' onClick={handleSubmit}/>
                </form>
            </Modal>
        </div>
    )
    
}

export default CreateProduct