import React from 'react'
import { SlMagnifier } from "react-icons/sl";

const SearchBtn = ({setSearch}) => {
  return (
    <div className='searchBtn'>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search for Anime"/>
          <SlMagnifier className="SearchBtn"/>
    </div>
  )
}

export default SearchBtn