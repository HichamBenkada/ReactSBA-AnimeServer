import React from 'react';
import { useEffect, useRef, useState } from "react";
import AnimeList from "../components/AnimeList";
import {AnimeInformation} from "./AnimeInfo";
import { SlMagnifier } from "react-icons/sl";


const Home = () => {
  const [animeData, setAnimeData] = useState();

  // const searchRef = useRef(null);
  const [search, setSearch] = useState("Naruto");

  //anime info
  const [animeInfo, setAnimeInfo] = useState();
  //favorites state
  const [favorites, setFavorites] = useState([]);
  //favorite handler
  const addFav = (fav) => {
    const index = favorites.findIndex((anime) => anime.mal_id === fav.mal_id);
    if (index < 0) {
      const newFav = [...favorites, fav];
      setFavorites(newFav);
    }
  };

  const removeFav = (fav) => {
    const newFav = favorites.filter((anime) => anime.mal_id !== fav.mal_id);
    setFavorites(newFav);
  };

  const getAnimeData = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw&limit=20`
    );
    const responseData = await response.json();
    setAnimeData(responseData.data);
  };

  useEffect(() => {
    getAnimeData();
  }, [search]);
  
  return (
    <>
      <AnimeInformation info={animeInfo} />
      <h2>Anime:</h2>
      <div className="row">
        <AnimeList
          data={animeData}
          setAnimeInfo={setAnimeInfo}
          handleFav={addFav}
        >
          <p>add fav+</p>
        </AnimeList>
      </div>

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
    </>
  );
}

export default Home;
