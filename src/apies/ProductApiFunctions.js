import {backendPath} from '../config/Config'

export const getProducts = async(setProducts, setIsLoading) => {
    await fetch(backendPath + '/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .then(() => setIsLoading(false))
    .catch(error => console.log(error))
}
export const getProductsByCategoryId = async(setProducts, setIsLoading, categoryId) => {
    await fetch(backendPath + '/api/products/category/' + categoryId)
    .then(response => response.json())
    .then(data => setProducts(data))
    .then(() => setIsLoading(false))
    .catch(error => console.log(error))
}
export const addProduct = async(data) => {
    await fetch(backendPath + '/api/products', {
        method: 'POST',
        body: data
    })
    .then(response => {
        if(response.ok){
            alert('the item has been saved')
        }else{
            alert('something went wrong!')
        }
    })
}
export const deleteProduct = async productId => {
    await fetch(backendPath + '/api/products/' + productId, {
        method: 'DELETE'
    })
    .then(res => {
        if(res.ok){
            alert('Item has been deleted')
        }else{
            alert('Something went wrong!')
        }
    })

}
export const updateProduct = async(data, id) => {
    await fetch(backendPath + '/api/products/' + id, {
        method: 'POST',
        body: data
    })
    .then(response => {
        if(response.ok){
            alert('the item has been updated')
        }else{
            
            alert('something went wrong!' + response)
        }
    }).catch(e => console.log(e))
}