import movieService from "../../services/movie"
import {
  showNotification
} from "./notificationReducer"

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH':
      return action.movies
    default:
      return state
  }
}

export const search = (keyword) => {
  return async dispatch => {
    try {
      const {
        movies
      } = await movieService.searchmovies(keyword)

      if (movies.length === 0) {
        return dispatch(showNotification(`Movie not found!`))
      }

      dispatch({
        type: 'SEARCH',
        movies
      })
    } catch (error) {
      dispatch(showNotification(`Movie not found!`))
    }
  }
}

export default searchReducer