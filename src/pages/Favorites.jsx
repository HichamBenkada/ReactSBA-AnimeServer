import React from 'react';
import AnimeList from '../components/AnimeList';

const Favorites = ({favorites,setAnimeInfo,removeFav}) => {

  return (
    <div className="row">
    <h1>Fav:</h1>
    <AnimeList
      data={favorites}
      setAnimeInfo={setAnimeInfo}
      handleFav={(anime)=>removeFav(anime)}
    >
      <p>remove fav-</p>
    </AnimeList>
  </div>
  )
}

export default Favorites;