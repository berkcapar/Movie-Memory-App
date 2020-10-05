import React from 'react'

const MovieData = ({movies}) => {
    return (
        <div>
            <h2>{movies.Search.Title}</h2>
            <img src={movies.Search.Poster}/>
        </div>
    )

}

export default MovieData