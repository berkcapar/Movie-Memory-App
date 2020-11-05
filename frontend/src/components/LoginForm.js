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

  if (loggedUser) {
    return <Redirect to="/search" />
  }

  return (
    <div className="loginform">
      <h2 className="logintitle">Let me in!</h2>
      <form className="loginform" onSubmit={handleLogin}>
        <div className="emailpassword"> 
        <div>
          Email:
          <input className="emailinput" name="email" />
        </div>
        <div>
          Password:
          <input className="passwordinput" name="password" />
        </div>
        </div>
        <button className="loginbutton" type="submit">Log in!</button>
        <style jsx>{`
        .loginform {
          padding-bottom: 1rem;
          padding-top: 0.2rem;   
          background-color: #660033;
          color: white;
          border-radius: 1.5rem;
          width: 80%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }
        .loginform div + div {
          margin-top: 1.5rem
        }
        .emailpassword{
          margin: 0 auto;
        }
        .logintitle{
        text-align: center;
        }
        .emailinput{
          margin-left: 2.3rem;
        }
        .passwordinput{
          margin-left: 0.4rem;
        }
        .loginbutton{
          margin: 1.5rem auto;
          width: 20%;
        }


        `}
        </style>
      </form>
    </div>
  )
}

export default LoginForm
