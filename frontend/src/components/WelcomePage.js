import React from 'react'
import Notification from './Notification'
import Togglable from './Toggleable'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


const WelcomePage = ({
    errorMessage,
    email,
    password,
    setEmail,
    setPassword,
    setNewName,
    setNewPassword,
    setNewEmail,
    addUser,
    handleLogin,
    newName,
    newPassword,
    newEmail   
}) => {
    return (
        <div>
        <h2 className="welcometext">Welcome to Movie App!</h2>
        <Notification message={errorMessage} />

        <Togglable buttonLabel="login">
          <LoginForm
            email={email}
            password={password}
            handleEmailChange={({ target }) => setEmail(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable>
        <div>
          <Togglable buttonLabel="Join">
            <SignupForm
              name={newName}
              email={newEmail}
              password={newPassword}
              handleNewNameChange={({ target }) => setNewName(target.value)}
              handleNewEmailChange={({ target }) => setNewEmail(target.value)}
              handleNewPasswordChange={({ target }) => setNewPassword(target.value)}
              handleSubmit={addUser}
            />
          </Togglable>
        </div>
      </div>
    )
}

export default WelcomePage