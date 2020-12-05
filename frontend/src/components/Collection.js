import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initMovies } from "../redux/reducers/collectionReducer"
import MovieListItem from "./MovieListItem"

const Collection = () => {
  const watchedMovies = useSelector((state) => state.collectedMovies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initMovies())
  }, [dispatch])

  return (
    <div>
      <>
        {watchedMovies.map(movie => <MovieListItem key={movie.imdbID} movie={movie} />)}
      </>
    </div>
  )
}
export default Collection
