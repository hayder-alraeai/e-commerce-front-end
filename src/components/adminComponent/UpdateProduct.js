import React, {useEffect, useState} from 'react'
import { Modal } from 'antd';
import {getCategories} from '../../apies/ApiFunctions'
import '../../styles/admin-style/CreateProduct.css'
import {EditOutlined} from '@ant-design/icons'
import {updateProduct} from '../../apies/ProductApiFunctions'
const UpdateProduct = ({update, obj}) => {
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
        setCategory(obj.category.categoryId)
        setDescription(obj.productDescription)
        setPrice(obj.productPrice)
      setIsModalVisible(true);
    };
    const handleSubmit = e => {
        e.preventDefault();
        let data = new FormData();
        data.append('image', image)
        data.append('categoryId', category)
        data.append('productDescription', description)
        data.append('productPrice', price)
        updateProduct(data, obj.id)
    }
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
    return(
        <div >
            <EditOutlined onClick={showModal} />
            <Modal title="Add new product" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <form>
                    <textarea placeholder='Description ...' value={description} onChange={e => setDescription(e.target.value)} />
                    <input type='text' placeholder='Price' value={price} onChange={e => setPrice(e.target.value)} />
                    <input type="file" onChange={e => setImage(e.target.files[0])}  />
                    <select value={category} onChange={e => setCategory(e.target.value)} defaultValue='Choose Category'>
                    {isLoading ? <p>No data</p> : 
                        categories.map(item => {
                            return(
                                <option key={item.categoryId} value={item.categoryId}>{item.categoryName}</option>
                            )
                        })
                    }
                    </select>
                    <input type='submit' value='Update' onClick={handleSubmit}/>
                </form>
            </Modal>
        </div>
    )
    
}

export default UpdateProduct