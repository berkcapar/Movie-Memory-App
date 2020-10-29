import React from "react"
import { useSelector } from "react-redux"
import MovieListItem from "./MovieListItem"

const MovieList = () => {

  const searchedmovies = useSelector(state=>{
    console.log(state.search)
    return state.search.filter(m=>m.title) 
  })
  console.log(searchedmovies)
  
  return (
    <div className="movielist">
      {searchedmovies.map((movie) => (
        <MovieListItem movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
