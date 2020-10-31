import React from "react"
import { useSelector } from "react-redux"
import MovieListItem from "./MovieListItem"

const MovieList = () => {

  const searchedmovies = useSelector(state=>state.search)
  
  return (
    <div className="movielist">
      {searchedmovies.map((movie) => (
        <MovieListItem movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
