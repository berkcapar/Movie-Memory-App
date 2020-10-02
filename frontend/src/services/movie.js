import axios from 'axios'
const baseUrl = '/api/movies'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const searchmovies = async keyword => {
    const response = await axios.get(baseUrl, { params: { keyword } })
    return response.data
}

export default {setToken,searchmovies}