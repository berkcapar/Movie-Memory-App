import axios from "axios"
const baseUrl = "/api/login"

const login = async ({ email, password }) => {
  const response = await axios.post(baseUrl, { email, password })
  return response.data
}

export default { login }

/*
login({ email: 'altay@altay.com', password: '1234' })
login({ email: '123' })
login({})
login('123')
login(1234)
login(null)
*/
