import axios from "axios"
const baseUrl = "/api/users"

const signup = async (name,email,password) => {
  const object = {name,email,password}
  const response = await axios.post(baseUrl, object)
  return response.data
}

export default { signup }
