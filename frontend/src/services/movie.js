import axios from "axios"

// https://github.com/axios/axios#request-config
/*
  headers: {}
  params: {
    ID: 12345
  }, 
*/

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const searchmovies = async (keyword) => {
  const config = {
    headers: { Authorization: token },
    params: { keyword },
  }

  const response = await axios.get('/api/movies', config)
  return response.data
}

const addmovies = async (movie) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post('/api/users/movies', movie, config)
  return response.data
}

const getMovies = async () => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.get("/api/users/movies", config)
  return response.data
}

export default { setToken, searchmovies, addmovies, getMovies }
