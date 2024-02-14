import React, { useState } from "react";

const AnimeList = ({ data,setAnimeInfo,handleFav, children }) => {
  
  return (
    <>
      {
      data ? 
        data.map((anime, index) => {
            return (
              <div className="card" key={index} onClick={()=> setAnimeInfo(anime)}>
                <img src={anime.images.jpg.large_image_url} alt="anime picture" />
                <div>
                  <h4>{anime.title}</h4>
                </div>
                <div className="overlay" >
                  <h4 style={{textAlign:"right"}}>{anime.title_japanese}</h4>
                  <h3>SYNOPSIS:</h3>
                  <div className="synopsis"><p>{anime.synopsis}</p>
                  </div>
                  <div className="favBtn" onClick={()=>handleFav(anime)}> {children} </div>
                </div>
              </div>
            );
          })
        :"" 
        }
    </>
  );
};

export default AnimeList;
