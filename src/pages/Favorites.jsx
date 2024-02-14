import React from 'react'

const Favorites = ({favorites,setAnimeInfo,removeFav}) => {

  return (
    <div className="row">
    <h1>Fav:</h1>
    <AnimeList
      data={favorites}
      setAnimeInfo={setAnimeInfo}
      handleFav={removeFav}
    >
      <p>remove fav-</p>
    </AnimeList>
  </div>
  )
}

export default Favorites