import React, { useState } from 'react'
import  '../styles/SearchBar.css'
import {SearchOutlined} from '@ant-design/icons'
import {useHistory} from 'react-router-dom'
const SearchBar = ({searchHandler}) => {
    const history = useHistory()
    const [searchWord, setSearchWord] = useState('')
    const submitSearch = () => {
        searchHandler(searchWord)
        history.push("/search/")
    }
    return(
        <div className="search-bar">
            <div className="search-wraper">
                <input type='text' name='search-text' placeholder='search' onChange={e => setSearchWord(e.target.value)} />
                <button className="search-button" onClick={submitSearch}><SearchOutlined /></button>     
            </div>
        </div>
    )
}
export default SearchBar