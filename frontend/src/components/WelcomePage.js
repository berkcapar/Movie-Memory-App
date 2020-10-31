import React from 'react'
import Notification from './Notification'
import Togglable from './Toggleable'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


const WelcomePage = () => {
    return (
        <div>
        <h2 className="welcometext">Welcome to Movie App!</h2>
        <Notification/>
        <Togglable buttonLabel="login">
          <LoginForm/>
        </Togglable>
        <div>
          <Togglable buttonLabel="Join">
            <SignupForm/>
          </Togglable>
        </div>
      </div>
    )
}

export default WelcomePage