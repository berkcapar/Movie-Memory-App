import React from "react"
import Notification from "./Notification"
import Togglable from "./Toggleable"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

const WelcomePage = () => {
  return (
    <div className="welcomepage">
      <div className="header">
        <h1 className="welcometitle">Movie App</h1>
        <h2 className="welcometext">
          Gather your favourite movies at one place
        </h2>
        <div className="registercard">
          <Notification />
          <LoginForm />
          <Togglable className="toggle" buttonLabel="Join">
            <SignupForm />
          </Togglable>
        </div>
      </div>

      <style jsx>{`
        body {
          background-image: url("/images/moviebg.jpeg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          background-attachment: fixed;
        }
        .welcometitle {
          display: flex;
          justify-content: center;
          width: 90%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default WelcomePage
