import React from 'react'


const SignupForm = ({
    addUser,
    handleNewNameChange,
    handleNewEmailChange,
    handleNewPasswordChange,
    newName,
    newEmail,
    newPassword
}) => { 
    return ( 
        <div> 
           <h2>Join Now! </h2> 
    <form onSubmit={addUser}>
      <div>
        Name:
      <input
      type = "text"    
      value = {newName}
      name = "New Name"
      onChange = {handleNewNameChange}
  />
      </div>    
     <div>
       Email:
       <input
       type = "text"
       value = {newEmail}
       name = "New Email" 
       onChange = {handleNewEmailChange}
       />
        </div>
        <div>    
       Password: 
       <input
       type = "password"
       value = {newPassword}
       name = "New Password"
       onChange = {handleNewPasswordChange}
       />
     </div>
     <button type="submit">Join!</button>
    </form>
    </div>
  )
}

export default SignupForm
  
  

