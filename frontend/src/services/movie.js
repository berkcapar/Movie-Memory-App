import axios from 'axios'
const baseUrl = ''

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const movies = async movieObject => {
    const config = {
        headers: {Authorization: token}
    }
const response = await axios.post(baseUrl, movieObject, config)
return response.data
}

export default {setToken,movies}