import React from 'react'

const LoginForm = ({
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
    email,
    password
}) => {
    return ( 
        <div>
     <h2>Giriş Yap</h2>
    <form onSubmit = {handleSubmit}>    
      <div>
      email:
      <input 
      type="text"
      name="name"
      value={email}
      onChange={handleEmailChange}
      /> 
       </div>
       <div> 
       password:
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