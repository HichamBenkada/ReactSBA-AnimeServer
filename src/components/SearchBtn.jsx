import React from 'react'
import { SlMagnifier } from "react-icons/sl";

const SearchBtn = ({setSearch}) => {
  return (
    <div className='searchBtn'>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search for Anime"/>
          <button><SlMagnifier/></button>
    </div>
  )
}

export default SearchBtn