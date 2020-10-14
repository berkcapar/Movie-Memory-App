import React from 'react'
import MovieListItem from './MovieListItem'


const MovieList = ({movies}) => {
    return ( 
    <div className='movielist'>   
        {movies.map(movie => <MovieListItem movie={movie} />)}
    </div>
    )
}

export default MovieList