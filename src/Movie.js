import React from 'react'

const  Movie = ({movie})=> {
    return (
        <div className="Movie">
            <h2> Title: {movie.Title}</h2>
            <img src={movie.Poster} alt="movie.Title"></img>
            <h2>Released : {movie.Year}</h2>
        </div>
    )
}
export default Movie;
