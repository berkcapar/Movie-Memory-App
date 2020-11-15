import React from "react"
import { useSelector } from "react-redux"

const Collection = () => {
  const watchedmovies = useSelector(state => state.collectedMovies)
  console.log(watchedmovies)

  return (
    <div>
    <h2>{watchedmovies.title}</h2>
    <img src={watchedmovies.poster} />
    </div>
  )
}
export default Collection
