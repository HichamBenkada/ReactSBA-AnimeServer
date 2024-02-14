import React from "react";
import AnimeInfo from "../components/AnimeInfo";
export const AnimeInformation = ({ animeInfo }) => {
  return (
    <div className="infoContainer">
      <div className="animeInfo">
        {animeInfo && <AnimeInfo info={animeInfo} />}
      </div>
    </div>
  );
};
