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
    <div className="signuparea">
      <h2 className="signup-title">Join Now! </h2>
      <form className="signupform" onSubmit={addUser}>
        <div className="signup-inputs"> 
        <div className="signup-nametext">
          Name:
          <input className="signup-nameinput" name="name"/>
        </div>
        <div className="signup-emailtext" >
          Email:
          <input className="signup-emailinput" name="email"/>
        </div>
        <div className="signup-passwordtext">
          Password:
          <input className="signup-passwordinput" name="password"/>
        </div>
        </div>
        <button className="signup-button" type="submit">Join!</button>
      </form>
    </div>
  )
}

export default SignupForm
