import React, { useState, useEffect } from "react"
import signupService from "./services/signup"
import movieService from "./services/movie"
import Routes from "./Routes"
import { Provider } from "react-redux"
import store from "./redux/store"



const App = () => {
  const [keyword, setKeyword] = useState("")
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [movies, setMovies] = useState([])

 

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      movieService.setToken(user.token)
    }
  }, [])



 
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

 return(
   <Routes/>
 )
}

export default App
