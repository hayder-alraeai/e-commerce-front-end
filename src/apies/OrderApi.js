import {backendPath} from '../config/Config'

export const getOrders = async(setOrders, setIsLoading, token) => {
    await fetch(backendPath + '/api/orders', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => response.json())
    .then(data => setOrders(data))
    .then(() => setIsLoading(false))
    .catch(error => console.log(error))
}
export const deleteOrders = async (orderId, token) => {
    console.log(token)
    await fetch(backendPath + '/api/orders/' + orderId, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token
          },
    })
    .then(res => {
        if(res.ok){
            alert('order has been deleted')
        }else{
            alert('Something went wrong!')
        }
    })

}