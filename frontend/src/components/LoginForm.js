import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { login } from "../redux/reducers/loginReducer"
import { showNotification } from "../redux/reducers/notificationReducer"
import movieService from "../services/movie"

const LoginForm = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.loggedUser)

  const handleLogin = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    try {
      dispatch(login(email, password))
      window.localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
      movieService.setToken(loggedUser.token)
    } catch (execption) {
      dispatch(showNotification(`Wrong Credentials`), 5)
    }
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      movieService.setToken(loggedUser.token)
    }
  }, [])

  if (loggedUser) {
    return <Redirect to="/search" />
  }

  return (
    <div className="loginform">
      <h2>Let me in!</h2>
      <form onSubmit={handleLogin}>
        <div>
          Email:
          <input name="email" />
        </div>
        <div>
          Password:
          <input name="password" />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  )
}

export default LoginForm
