import React from 'react'
import {LoadingOutlined} from '@ant-design/icons'
import '../styles/LoadingIcon.css'
const LoadingIcon = () => {
    return(
        <div className="reload-icon">
            <LoadingOutlined />
            <p className='reload-icon-text'>Loading...</p>
         </div>
    )
}
export default LoadingIcon