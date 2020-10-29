import React from 'react'
import MovieList from './MovieList'
import KeywordInput from './KeywordInput'


const SearchArea = ({user,setUser,keyword,setKeyword,handleSearch,movies}) => {

    const logoutUser = () => localStorage.removeItem("loggedUser")

    const handleLogout = () => {
      setUser(null)
      logoutUser()
    }

    return (
        <div>
        <div className="userloggedlogout">
          <p>{user.name} logged in</p>
          <button className="logoutbutton" onClick={handleLogout}>
            Log Out!
          </button>
        </div>
        <div className="welcomeuser">
          <KeywordInput
            keyword={keyword}
            handleKeywordChange={({ target }) => setKeyword(target.value)}
            handleSubmit={handleSearch}
          />
          <MovieList movies={movies} />
        </div>
      </div>

    )

}

export default SearchArea

