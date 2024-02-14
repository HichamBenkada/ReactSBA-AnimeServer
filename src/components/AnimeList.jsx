import React, { useState } from "react";
import { Link } from "react-router-dom";

const AnimeList = ({ data, setAnimeInfo, handleFav, children }) => {
  // const navigate = Navigate();
  return (
    <>
      {data
        ? data.map((anime, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => setAnimeInfo(anime)}
              >
                

                <Link to={`/anime-info`}>
                <img
                  src={anime.images.jpg.large_image_url}
                  alt="anime picture"
                />
                </Link>
                <div>
                    <h4>{anime.title}</h4>
                  </div>
                <div className="overlay">
                  <h4 style={{ textAlign: "right" }}>{anime.title_japanese}</h4>
                  <h3>SYNOPSIS:</h3>
                  <div className="synopsis">
                    <p>{anime.synopsis}.trim()</p>
                  </div>
                  <div className="favBtn" onClick={() => handleFav(anime)}>
                    {" "}
                    {children}{" "}
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};

export default AnimeList;
