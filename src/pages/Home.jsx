import React from "react";
import { useEffect, useRef, useState } from "react";
import AnimeList from "../components/AnimeList";

const Home = ({ setAnimeInfo, addFav }) => {
  //Manage Anime data state
  const [animeData, setAnimeData] = useState();

  // const searchRef = useRef(null); //Remove me ...wanted to use it for search button but I implement dynamic search so this is not needed
  //Manage Search State
  const [search, setSearch] = useState("Naruto");

  //Getting data from Jikan "Anime" API
  const getAnimeData = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw&limit=20`
    );
    const responseData = await response.json();
    setAnimeData(responseData.data);
  };

  //handling fetch side effect
  useEffect(() => {
    getAnimeData();
  }, [search]);

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
