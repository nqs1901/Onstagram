import React from 'react'

export default function Search() {
    return (
        <form className="search_form">
        <input type="text" name="search" value="" id="search" title="Enter to Search"
         />

        <div className="search_icon" style={{opacity: 0.3}}>
            <span className="material-icons">search</span>
            <span>Enter to Search</span>
        </div>

        <div className="close_search" 
        style={{opacity: 1}} >
            &times;
        </div>

        <button type="submit" style={{display: 'none'}}>Search</button>

        
    </form>
    )
}
