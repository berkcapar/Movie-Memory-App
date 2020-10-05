import React from 'react'
import MovieData from './MovieData'


const MovieList = ({movies}) => {

    if(movies.length === 0) {
        return ( 
        <div>Make a search for the movie yo watch!</div>
        )
    }
    if (movies.length > 1) {
    let returnedMovieTitles = movies.map(movie=>movie.Search.Title)
    let returnedMoviePosters = movies.map(movie => movie.Search.Poster)
    return {returnedMovieTitles, returnedMoviePosters}
    } 
    if (movies.length >10){
    return <div>Please specify your search!</div>
    }
    else {
        return ( 
        <MovieData movies = {movies[0]}/>
        )
    } 
    
}

export default MovieList