import React, { useState } from 'react'
// import NavBar from './NavBar'


export const SearchForm = ({onSearchSubmit}) => {
    const [searchItem, setSearchItem] = useState('')

    function handleInputChange  (evt)  {
        evt.preventDefault()
        setSearchItem(evt.target.value)
    }

    function  handleFormSubmit (evt) {
        evt.preventDefault()
        onSearchSubmit(searchItem)
    }
    
    return (
          <>
            
        <div className="search-bar ui segment"   >
            <form className="ui form-control" onSubmit={handleFormSubmit}>
                <div className="field">
                    <label>Video Search : </label>
                    <input type="text" placeholder="Search..." value={searchItem} onChange={handleInputChange} />
                </div>
            </form>
        </div>
        
          </>
    );
}

export default SearchForm