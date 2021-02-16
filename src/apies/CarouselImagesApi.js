import {backendPath} from '../config/Config'

export const addCarouselImage = async(data, token) => {
    await fetch(backendPath + '/api/carousel-images', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token
          },
        body: data
    })
    .then(response => {
        if(response.ok){
            alert('the item has been saved')
        }else{
            alert('something went wrong!' + response.statusText)
        }
    })
}
export const getCarouselImages = async(setCarouselImages, setIsLoading) => {
    await fetch(backendPath + '/api/carousel-images', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => setCarouselImages(data))
    .then(() => setIsLoading(false))
    .catch(error => console.log(error))
}
export const deleteCarouselImage = async (imageId, token) => {
    await fetch(backendPath + '/api/carousel-images/' + imageId, {
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
export const updateCarouselImage = async(data, id, token) => {
    await fetch(backendPath + '/api/carousel-images/' + id, {
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