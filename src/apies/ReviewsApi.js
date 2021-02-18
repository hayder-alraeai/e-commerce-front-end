import {backendPath} from '../config/Config'

export const addReview = async(data, handleMessage) => {
    await fetch(backendPath + '/api/reviews', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: data
    })
    .then(response => {
        if(response.ok){
            handleMessage('Your review has been added', 'success')
        }else{
            alert('something went wrong!' + response.statusText)
            console.log(response.text())
            console.log(response.status)
        }
    })
}
export const getReviewsByProductId = async(setReviews, setIsLoading, productId) => {
    await fetch(backendPath + '/api/reviews/' + productId)
    .then(response => response.json())
    .then(data => setReviews(data))
    .then(() => setIsLoading(false))
    .catch(error => console.log(error))
}
export const deleteReviewById = async (reviewId, token, handleMessage) => {
    await fetch(backendPath + '/api/reviews/' + reviewId, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token
          },
    })
    .then(res => {
        if(res.ok){
            handleMessage('Review has been deleted', 'success')
        }else{
            handleMessage('Something went wrong ' + res.status, 'error')
        }
    })

}