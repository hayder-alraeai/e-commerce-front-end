import React, { useEffect, useState } from 'react' 
import '../styles/Home.css'
import '../styles/App.css'
import DisplayProducts from '../components/DisplayProducts'
import { useParams } from 'react-router-dom'
import DisplayProductsByCategory from '../components/DisplayProductsByCategory'
const DisplayProductsByCategoryId = () => {
    let {id} = useParams()
    
    return(
        <div className="home-body">
            <DisplayProductsByCategory categoryId={id} />
        </div>
    )
}
export default DisplayProductsByCategoryId