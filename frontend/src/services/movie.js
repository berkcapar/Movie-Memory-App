import axios from "axios"

// https://github.com/axios/axios#request-config
/*
  headers: {}
  params: {
    ID: 12345
  }, 
*/

const baseUrl = "/api/movies"

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const searchmovies = async (keyword) => {
  const config = {
    headers: { Authorization: token },
    params: { keyword }
  }
  
  const response = await axios.get(baseUrl, config)
  return response.data
}

const addmovies = async ({ title, poster }) => {
  const config = {
    headers: { Authorization: token },
    data: { title, poster },
  }

  const response = await axios.post(baseUrl, config)
  return response.data
}

export default { setToken, searchmovies, addmovies }
