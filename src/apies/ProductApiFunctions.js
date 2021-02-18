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
export const addProduct = async(data, token, handleMessage) => {
    await fetch(backendPath + '/api/products', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token
          },
        body: data
    })
    .then(response => {
        if(response.ok){
            handleMessage('The item has been saved', 'success')
        }else{
            alert('something went wrong!' + response.statusText)
            console.log(response.text())
            console.log(response.status)
        }
    })
}
export const deleteProduct = async (productId, token) => {
    console.log(token)
    await fetch(backendPath + '/api/products/' + productId, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token
          },
    })
    .then(res => {
        if(res.ok){
            alert('Item has been deleted')
        }else{
            alert('Something went wrong!')
        }
    })

}
export const updateProduct = async(data, id, token) => {
    await fetch(backendPath + '/api/products/' + id, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token
          },
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
export const getProductById = async(setProduct, setIsLoading, productId) => {
    await fetch(backendPath + '/api/products/' + productId)
    .then(response => response.json())
    .then(data => setProduct(data))
    .then(() => setIsLoading(false))
    .catch(error => console.log(error))
}