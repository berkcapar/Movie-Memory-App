import React from "react"
import MovieList from "./MovieList"
import KeywordInput from "./KeywordInput"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/reducers/loginReducer"
import { getUserNameFromState } from "../redux/selectors"

const SearchArea = ({ movies }) => {
  const dispatch = useDispatch()
  const username = useSelector(getUserNameFromState)

  const handleLogout = () => {
    dispatch(logout())
    window.location.href = '/'
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
        <KeywordInput />
        <MovieList movies={movies} />
      </div>
    </div>
  )
}

export default SearchArea
