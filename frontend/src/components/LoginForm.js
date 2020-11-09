import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"
import { login } from "../redux/reducers/loginReducer"
import { showNotification } from "../redux/reducers/notificationReducer"
import movieService from "../services/movie"

const LoginForm = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.loggedUser)
  const history = useHistory()

  const handleLogin = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value
    try {
      dispatch(login(email, password))
      window.localStorage.setItem("loggedUser", JSON.stringify(loggedUser))
      history.push('/search')
      movieService.setToken(loggedUser.token)
    } catch (execption) {
      dispatch(showNotification(`Wrong Credentials`))
    }
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser")
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      movieService.setToken(loggedUser.token)
    }
  }, [])

  /*
  if (loggedUser) {
    return <Redirect to="/search" />
  }*/

  return (
    <div className="loginarea">
      <h2 className="logintitle">Let me in!</h2>
      <form className="loginform" onSubmit={handleLogin}>
        <div className="emailpassword"> 
        <div className="emailtext">
          Email:
          <input className="emailinput" name="email" />
        </div>
        <div className="passwordtext">
          Password:
          <input className="passwordinput" name="password" />
        </div>
        </div>
        <button className="loginbutton" type="submit">Log in!</button>
      </form>
    </div>
  )
}

export default LoginForm
