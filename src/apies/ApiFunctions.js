import {backendPath} from '../config/Config'

export const getCategories = async(setCategories, setIsLoading) => {
    await fetch(backendPath + '/api/categories')
    .then(response => response.json())
    .then(data => {
        setCategories(data)
    })
    .then(() => setIsLoading(false))
    .catch(error => console.log(error))
}
export const getCategoriesAdmin = async(setCategories, setIsLoading, setCategory) => {
    await fetch(backendPath + '/api/categories')
    .then(response => response.json())
    .then(data => {
        setCategories(data)
        setCategory(data[0].categoryId)
    })
    .then(() => setIsLoading(false))
    .catch(error => console.log(error))
}
