import React from 'react'

const MovieCards = (props) => {
    const {title,poster_path,vote_average,overview}=props
    let image_path="https://image.tmdb.org/t/p/w300"
  return (
    <div className='movie'>
        <img className='poster' src={image_path+poster_path} alt={title} />
        <div className="movie-details">
            <div className="box">
                <h4 className="title">{title}</h4>
                <p className="rating">{vote_average}</p>

            </div>

            <div className="overview">
                <h1>Overview</h1>
                {overview}
            </div>
        </div>

    </div>
  )
}

export default MovieCards