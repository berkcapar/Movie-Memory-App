import loginService from "../../services/login"
import movieService from "../../services/movie"

const cacheLoggedInUser = (user) => {
  window.localStorage.setItem("loggedUser", JSON.stringify(user))
  movieService.setToken(user.token)
}

const retrieveLoggedInUserFromCache = () => {
  const loggedUserJSON = window.localStorage.getItem("loggedUser")
  if (loggedUserJSON) {
    return JSON.parse(loggedUserJSON)
  }
}

export const persistAuthentication = () => {
  return async (dispatch) => {
    const user = retrieveLoggedInUserFromCache()

    if (user) {
      cacheLoggedInUser(user)
      dispatch({
        type: "USER_LOGGED_IN",
        data: user,
      })
    }
  }
}

export const login = (email, password) => {
  return async (dispatch) => {
    const user = await loginService.login(email, password)
    cacheLoggedInUser(user)
    dispatch({
      type: "USER_LOGGED_IN",
      data: user,
    })
  }
}

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem("loggedUser")
    dispatch({
      type: "USER_LOGGED_OUT",
    })
  }
}

const initialState = {
  data: '',
  isLoggedIn: false,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        data: action.data,
        isLoggedIn: true,
      }
    case "USER_LOGGED_OUT":
      return state
    default:
      return state
  }
}

export default loginReducer
