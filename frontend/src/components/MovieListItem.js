import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {newMovie} from "../redux/reducers/collectionReducer"

const MovieListItem = ({ movie }) => {
  const [loading, setLoading] = useState(false)
  const [watched, setWatched] = useState(false)
  const dispatch = useDispatch()


  const addMovie = async (event) => {
    setLoading(true)
    try {
      dispatch(newMovie(movie))
    } catch(execption){
      console.log("Try to add again!")
    }
  }
  
  return (
    <div className="moviecard">
      <h2 className="movietitle">{movie.title}</h2>
      <img src={movie.poster} />
      <button disabled={loading} onClick={addMovie} type="submit">
        {loading ? "Adding" : "Add to Your Collection!"}
      </button>
    </div>
  )
}

export default MovieListItem