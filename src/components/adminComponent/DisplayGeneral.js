import React, { useEffect, useState } from 'react'
import {getCategories} from '../../apies/ApiFunctions'
import {getProducts} from '../../apies/ProductApiFunctions'
import {getOrders} from '../../apies/OrderApi'
import '../../styles/admin-style/DisplayGeneral.css'
import { Modal} from 'antd';
import {addCarouselImage, deleteCarouselImage, getCarouselImages, updateCarouselImage} from '../../apies/CarouselImagesApi'
import {PlusOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons'
import {backendPath} from '../../config/Config'
const DisplayGeneral = ({token}) => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isAddImageModalOpen, setIsAddImageModalOpen] = useState(false)
    const [isUpdateImageModalOpen, setIsUpdateImageModalOpen] = useState(false)
    const [image, setImage] = useState(null)
    const [carouselImages, setCarouselImages] = useState([])
    const [carouselImageId, setCarouselImageId] = useState('')
    useEffect(() => {
        getCategories(setCategories, setIsLoading)
        getProducts(setProducts, setIsLoading)
        getOrders(setOrders, setIsLoading, token)
        getCarouselImages(setCarouselImages, setIsLoading)
    }, [])

    const handleDeleteImage = id => {
        if(window.confirm("You are about removing this image! Are you sure?")){
            deleteCarouselImage(id, token)
        }   
    }
    const handleUpdateImage = () => {
        let data = new FormData()
        data.append('image', image)
        updateCarouselImage(data, carouselImageId, token)
        setIsUpdateImageModalOpen(false)
    }
    const handleAddImage = () => {
        let data = new FormData();
        data.append('image', image)
        addCarouselImage(data, token)
        setIsAddImageModalOpen(false)
        getCarouselImages(setCarouselImages, setIsLoading)

    }
    return(
        <div className="general-body">
            <table>
                <tr>
                    <th>Categories</th>
                    <th>Products</th>
                    <th>Orders</th>
                    <th>Users</th>
                </tr>
                <tr>
                    <td>{categories.length}</td>
                    <td>{products.length}</td>
                    <td>{orders.length}</td>
                    <td>6</td>
                </tr>
            </table>
            <div className="carousel-section">
                <div className="carousel-images-title">Carousel images </div>
                <div className="carousel-images-images">
                    {carouselImages.map(image => {
                        return(
                            <div className="image-wrapper" key={image.carouselImageId}>
                            <EditOutlined onClick={() => {
                                setCarouselImageId(image.carouselImageId)
                                setIsUpdateImageModalOpen(true)}} className="edit-icon" />
                            <DeleteOutlined onClick={() => handleDeleteImage(image.carouselImageId)} className="delete-icon"/>
                            <img src={backendPath + "/api/images/" + image.carouselImageId} />
                        </div>
                        )
                    })}
                    <PlusOutlined onClick={() => setIsAddImageModalOpen(true)} className="plus-icon" />
                </div>
            </div>
            <Modal okText="Add" title="Add Image" visible={isAddImageModalOpen} onOk={handleAddImage} onCancel={() => setIsAddImageModalOpen(false)}>
                <input type="file" onChange={e => setImage(e.target.files[0])} required />
            </Modal>
            <Modal okText="Save" title="update Image" visible={isUpdateImageModalOpen} onOk={handleUpdateImage} onCancel={() => setIsUpdateImageModalOpen(false)}>
                 <input type="file" onChange={e => setImage(e.target.files[0])} required />
            </Modal>
            <Modal okText="Save" title="update Image" visible={isUpdateImageModalOpen} onOk={handleUpdateImage} onCancel={() => setIsUpdateImageModalOpen(false)}>
                 <input type="file" onChange={e => setImage(e.target.files[0])} required />
            </Modal>
        </div>
    )
}
export default DisplayGeneral