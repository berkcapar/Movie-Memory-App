import React from 'react'
import MovieList from './MovieList'
import KeywordInput from './KeywordInput'
import { useSelector } from 'react-redux'


const SearchArea = ({setUser,keyword,setKeyword,handleSearch,movies}) => {


const username = useSelector(state => state.loggedUser.name)

    const logoutUser = () => localStorage.removeItem("loggedUser")

    const handleLogout = () => {
      setUser(null)
      logoutUser()
    }

    return (
        <div>
        <div className="userloggedlogout">
          <p>{username} logged in</p>
          <button className="logoutbutton" onClick={handleLogout}>
            Log Out!
          </button>
        </div>
        <div className="welcomeuser">
          <KeywordInput/>
          <MovieList movies={movies} />
        </div>
      </div>

    )

}

export default SearchArea

