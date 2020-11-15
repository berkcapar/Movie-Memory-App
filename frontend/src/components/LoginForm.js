import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { login, persistAuthentication } from "../redux/reducers/loginReducer"
import { showNotification } from "../redux/reducers/notificationReducer"
import { getLoggedInfoFromState } from "../redux/selectors"

const LoginForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const isLoggedIn = useSelector(getLoggedInfoFromState)

  useEffect(() => {
    dispatch(persistAuthentication())
  }, [dispatch])

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/search')
    }
  }, [isLoggedIn])

  const handleLogin = (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const password = event.target.password.value

    try {
      dispatch(login(email, password))
    } catch (error) {
      dispatch(showNotification(`Wrong Credentials`))
    }
  }

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
        <button className="loginbutton" type="submit">
          Log in!
        </button>
      </form>
    </div>
  )
}

export default LoginForm
