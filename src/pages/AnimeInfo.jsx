import React from 'react'
import AnimeInfo from '../components/AnimeInfo'
export const AnimeInfomation = (props) => {
  return (
    <div className="infoContainer">
    <div className="animeInfo">
      {props.info && <AnimeInfo info={props.info} />}
    </div>
  </div>

  )
}
