import React from "react"

const LoginForm = ({
  handleSubmit,
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
}) => {
  return (
    <div className="loginform">
      <h2>Let me in!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Email:
          <input
            type="text"
            name="name"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          Password:
          <input
            type="text"
            name="name"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  )
}

export default LoginForm
