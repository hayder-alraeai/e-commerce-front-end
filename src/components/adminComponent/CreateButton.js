import React from 'react'
import "../../styles/admin-style/CreateButton.css"
import '../../styles/General.css'
import {PlusOutlined} from '@ant-design/icons'

const CreateButton = ({onClick, text}) => {
    return(
            <div className="create-button-wrapper">
                <div onClick={onClick} className="create-button">
                    <div className="child-text">
                        {text}
                    </div>
                    <div className="child-icon">
                        <PlusOutlined />
                    </div>                     
                </div>
            </div>
    )
}
export default CreateButton