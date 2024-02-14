import React, { useRef } from 'react'
import { SlMagnifier } from "react-icons/sl";

const SearchBtn = ({setSearch}) => {
  const searchRef = useRef(null)
  return (
    <div className='searchBtn'>
        <input
          onChange={(e) => setSearch(e.target.value)}
          ref = {searchRef}
          type="search"
          placeholder="Search for Anime"/>
          
          {/* both event listeners accomplish the same task. changing search state and evoking data fitching  */}
          <button onClick={(e) => setSearch(searchRef.current.value)}><SlMagnifier/></button>
    </div>
  )
}

export default SearchBtn