import React from 'react'
import  '../styles/SearchBar.css'
import {SearchOutlined} from '@ant-design/icons'
const SearchBar = () => {
    return(
        <div className="search-bar">
            <div className="search-wraper">
                <input type='text' name='search-text' placeholder='search' />
                <button className="search-button"><SearchOutlined /></button>     
            </div>
        </div>
    )
}
export default SearchBar