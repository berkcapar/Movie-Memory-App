import React from "react"
import movieService from "../services/movie"


const KeywordInput = ({ setMovies,keyword, setKeyword, setErrorMessage, handleKeywordChange, handleSubmit }) => {

  
  const handleSearch = async (event) => {
    event.preventDefault()
    try {
      /*
    const response = axios.get
    response.data = JSON
    response.data.movies = BIZIM BACKENDDEN YOLLADIGIMIZ SEY
  */

      const { movies } = await movieService.searchmovies(keyword)
      setMovies(movies)
      setKeyword("")
    } catch (execption) {
      setErrorMessage("Movie not found!")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="keywordinput">
        <h2>Search the recent movies you have watched!</h2>
        <input type="text" value={keyword} onChange={handleKeywordChange} />
      </div>
      <button type="submit">Search</button>
    </form>
  )
}

export default KeywordInput
