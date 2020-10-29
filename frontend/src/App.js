import React, { useState, useEffect } from "react"
import movieService from "./services/movie"
import Routes from "./Routes"


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      movieService.setToken(user.token)
    }
  }, [])

 return(
   <Routes/>
 )
}

export default App
