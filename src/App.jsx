import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

//components:
import NavBar from "./components/NavBar";

//Pages:
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import { AnimeInformation } from "./pages/AnimeInfo";
import Favorites from "./pages/Favorites";

//Styles:
import "./App.css";

function App() {
  //anime information state
  const [animeInfo, setAnimeInfo] = useState();

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

  //favorites state
  const [favorites, setFavorites] = useState([]);
  //favorite handlers: add/remove
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

  //Main routes:
  return (
    <>
      <NavBar setSearch={setSearch}/>
      <Routes>
        <Route path="*" elemete={<NotFound />} />
        <Route
          path="/"
          element={<Home 
            animeData = {animeData}
            setAnimeInfo={setAnimeInfo} addFav={addFav} />}
        />
        <Route
          path="/anime-info"
          element={<AnimeInformation animeInfo={animeInfo} />}
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              setAnimeInfo={setAnimeInfo}
              removeFav={removeFav}
              favorites={favorites}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
