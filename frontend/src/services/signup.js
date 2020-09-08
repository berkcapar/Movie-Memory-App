import axios from 'axios'
const baseUrl = '/api/signup'


const signup = async newUser => {
    const response  = await axios.post(baseUrl, newUser)
    return response.data
}

export default { signup }



