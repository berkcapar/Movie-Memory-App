import React, { useState, useEffect } from 'react';
import loginService from './services/login' 
import signupService from './services/signup'
import movieService from './services/movie'
import LoginForm from './components/LoginForm'
import Togglable from './components/Toggleable';
import SignupForm from './components/SignupForm';
import Notification from './components/Notification'
import KeywordInput from './components/KeywordInput'
import MovieList from './components/MovieList'

const App = () => {

const [keyword, setKeyword] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [user, setUser] = useState(null)
const [users, setUsers] = useState([])
const [newName, setNewName] = useState('')
const [newEmail, setNewEmail] = useState('')
const [newPassword, setNewPassword] = useState('')
const [errorMessage, setErrorMessage] = useState(null)
const [movies, setMovies] = useState([])



const addUser = (event) => {
  event.preventDefault()
  const newUser = {
    name: newName,
    email: newEmail,
    password:newPassword
  }
  if(newPassword.length<3){ 
    setErrorMessage('Password should be longer than 3 charecters')
    setTimeout(()=>{
      setErrorMessage(null)
    },5000)
 
}
else { 
  signupService
  .signup(newUser)
  .then(returnedUser=>{
    setUsers(users.concat(returnedUser))
    setErrorMessage('Succesfully joined!')
    
  })
}
}

useEffect(()=>{
  const loggedUserJSON = window.localStorage.getItem('loggedUser')
  if(loggedUserJSON){
    const user = JSON.parse(loggedUserJSON)
    setUser(user)
    movieService.setToken(user.token)
  }
},[])

const handleLogin = async (event) => {
event.preventDefault()
try {
  const user = await loginService.login({
    email, password
  })
  window.localStorage.setItem(
    'loggedUser', JSON.stringify(user)
  )
movieService.setToken(user.token)
setUser(user)
setEmail('')
setPassword('')
} catch(execption){
  setErrorMessage('Wrong credentials')
  setTimeout(()=>{
    setErrorMessage(null)
  },5000)
}
}

const logoutUser = () =>
  localStorage.removeItem('loggedUser')

const handleLogout = () => {
  setUser(null)
  logoutUser()
}

const handleSearch = async (event) => {
event.preventDefault()
try {
  /*
    const response = axios.get
    response.data = JSON
    response.data.movies = BIZIM BACKENDDEN YOLLADIGIMIZ SEY
  */

  const { movies } = await movieService.searchmovies(
    keyword
  ) 
  setMovies(movies)
  setKeyword('')
 
}catch(execption){
setErrorMessage('Movie not found!')
}
}

if (!user){
return ( 
  <div> 
  <h2 className='welcometext'>Welcome to Movie App!</h2>
  <Notification message = {errorMessage} />
 
  <Togglable buttonLabel = 'login'> 
  <LoginForm
  email = {email}
  password = {password}
  handleEmailChange = {({target}) => setEmail(target.value)}
  handlePasswordChange = {({target})=>setPassword(target.value)}
  handleSubmit = {handleLogin}
  />
  </Togglable>
 <div>

<Togglable buttonLabel = 'Join'>
<SignupForm
  name = {newName}
  email = {newEmail}
  password = {newPassword}
  handleNewNameChange = {({target})=>setNewName(target.value)}
  handleNewEmailChange = {({target})=>setNewEmail(target.value)}
  handleNewPasswordChange = {({target})=>setNewPassword(target.value)}
  handleSubmit= {addUser}
  />

</Togglable>
</div>
</div>


  )
}
return ( 
  <div>
    <div className='userloggedlogout'> 
     <p>{user.name} logged in</p>
     <button className='logoutbutton' onClick={handleLogout}>Log Out!</button>    
     </div>
    <div className='welcomeuser'>
     
      <KeywordInput
      keyword = {keyword}
      handleKeywordChange = {({target})=>setKeyword(target.value)}
      handleSubmit={handleSearch}            
      />
     <MovieList movies={movies}/>     
    </div>
  
  </div>
)
}

export default App
