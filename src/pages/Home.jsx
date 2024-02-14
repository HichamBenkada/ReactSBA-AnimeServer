import React from "react";
import AnimeList from "../components/AnimeList";

const Home = ({ animeData, setAnimeInfo, addFav }) => {
 

  return (
    <div className="infoContainer">
      <h2>Anime Results:</h2>
      <div className="row">
        <AnimeList
          data={animeData}
          setAnimeInfo={setAnimeInfo}
          handleFav={(anime) => addFav(anime)}
        >
          <p>add fav+</p>
        </AnimeList>
      </div>
    </div>
  );
};

export default Home;
