import React, { useState } from 'react'
// import NavBar from './NavBar'


export const SearchForm = ({onSearchSubmit}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const searchTermHandler = (evt) => {
        evt.preventDefault()
        setSearchTerm(evt.target.value)
    }

    const onFormSubmit = (evt) => {
        evt.preventDefault()
        onSearchSubmit(searchTerm)
    }
    
    return (
          <>
            
        <div className="search-bar ui segment" id="search"  >
            <form className="ui form-control" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Video Search : </label>
                    <input type="text" placeholder="Search..." value={searchTerm} onChange={searchTermHandler} />
                </div>
            </form>
        </div>
        
          </>
    );
}

export default SearchForm