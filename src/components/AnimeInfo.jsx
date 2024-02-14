import React from 'react'

const AnimeInfo = (props) => {
  const { title,
    images:{jpg:{large_image_url: imgUrl}}, 
    rank,
    score,
    popularity,
    rating,
    status,
    source,
    duration
  } = props.info
  return (
    <div>
      <h3>{title}</h3>
      <img src={imgUrl} alt={title} />
      <pre className='info'>
         <b># Rank: {rank} <br />
          # Score: {score} <br /> 
          # Rating:{rating} <br /></b> <hr />
         | Duration: {duration}<br />
         | Source: {source} <br />
         | Status: {status}<br />
         | Popularity: {popularity}
      </pre>
    </div>
  )
}

export default AnimeInfo