import React from "react";
import AnimeList from "../components/AnimeList";

const Favorites = ({ favorites, setAnimeInfo, removeFav }) => {
  const favSerialized = JSON.stringify(favorites);
  //Set item in local storage
  localStorage.setItem("fav", favSerialized);
  //Get item
  const fav_deserialized = JSON.parse(localStorage.getItem("fav"));

  return (
    <div className="infoContainer">
      <h1>Fav:</h1>
      <div className="row">
        <AnimeList
          data={fav_deserialized}
          setAnimeInfo={setAnimeInfo}
          handleFav={(anime) => removeFav(anime)}
        >
          <p>remove fav-</p>
        </AnimeList>
      </div>
    </div>
  );
};

export default Favorites;
