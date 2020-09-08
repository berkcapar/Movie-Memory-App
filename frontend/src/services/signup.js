import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/signup'


const signup = async newUser => {
    const response  = await axios.post(baseUrl, newUser)
    return response.data
}

export default { signup }



