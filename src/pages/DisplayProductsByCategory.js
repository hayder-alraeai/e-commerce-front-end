import React from 'react' 
import '../styles/Home.css'
import '../styles/App.css'
import {useParams} from 'react-router-dom'
import DisplayProductsByCategory from '../components/DisplayProductsByCategory'
import LoadingIcon from '../components/LoadingIcon'
const DisplayProductsByCategoryId = ({categoryId, handleAddToCart}) => {
    let categoryIdLocal = categoryId
    let {id} = useParams()


    if(!categoryId && !id){
        return(
            <LoadingIcon />
        )
    }
    
    return(
        <div className="home-body">
            {console.log('this is useParams: ' + id)}
            <DisplayProductsByCategory handleAddToCart={handleAddToCart}  categoryIdLocal={categoryIdLocal ? categoryIdLocal : id} />
        </div>
    )
}
export default DisplayProductsByCategoryId