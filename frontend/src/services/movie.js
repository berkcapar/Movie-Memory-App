import axios from 'axios'
const baseUrl = '/api/movies'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const searchmovies = async keyword => {
    let config = {
        headers: {Authorization:token}
    }
    const response = await axios.get(baseUrl, { params: { keyword } },config)
    return response.data
}

const addmovies = async ({ title, poster }) => {
    let config = {
        headers: {Authorization:token}
    }
    const response = await axios.post(baseUrl, { title, poster }, config)
    return response.data
}

export default {setToken,searchmovies,addmovies}