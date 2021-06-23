import React from 'react'  

const Search = ({handleChange}) => {

 

    return(
        <div>
            <input type="text" placeholder="search..."  onChange={handleChange}/>
        </div>
    )
} 
export default Search;