import React from "react"
import { useDispatch } from "react-redux"
import { showNotification } from "../redux/reducers/notificationReducer"
import { createUser } from "../redux/reducers/signupReducer"

const SignupForm = () => {
  
  const dispatch = useDispatch()

  const addUser = (event) => {
    event.preventDefault()

    const name = event.target.name.value
    const email= event.target.email.value
    const password = event.target.password.value
      
    if(password.length <3) {
      dispatch(showNotification(`Password should be longer than 3 charecters`))
    }
    else {
      dispatch(createUser(name,email,password))
      dispatch(showNotification(`Succesfully joined`))
    }
  }

  return (
    <div className="signupform">
      <h2>Join Now! </h2>
      <form className="signupform" onSubmit={addUser}>
        <div>
          Name:
          <input name="name"/>
        </div>
        <div>
          Email:
          <input name="email"/>
        </div>
        <div>
          Password:
          <input name="password"/>
        </div>
        <button type="submit">Join!</button>
        <style jsx>{`
        background-color: #660033;
        display: flex;
        flex-direction: column;
        border-radius: 1.5rem;
        width: 80%;
        margin: 0 auto;
        `}
        </style>
      </form>
    </div>
  )
}

export default SignupForm
