import React from "react"
import { useDispatch } from "react-redux"
import { search } from "../redux/reducers/searchReducer"


const KeywordInput = () => {

  const dispatch = useDispatch()

  const handleSearch = async (event) => {
    event.preventDefault()
    const keyword = event.target.keyword.value
    dispatch(search(keyword))
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="keywordinput">
        <h2>Search the recent movies you have watched!</h2>
        <input name = "keyword" />
      </div>
      <button type="submit">Search</button>
    </form>
  )
}

export default KeywordInput
