import movieService from '../../services/movie'

export const newMovie = (movie) => {
  return async dispatch => {
    const watchedMovie = await movieService.addmovies(movie)

    dispatch({
      type: 'ADD_MOVIE',
      data: watchedMovie
    })
  }
}

export const initMovies = () => {
  return async dispatch => {
    const data = await movieService.getMovies()
    dispatch({
      type: 'INIT_MOVIES',
      data: data.watchedMovies,
    })
  }
}

const collectionReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_MOVIE':
      return [...state, action.data]
      case 'INIT_MOVIES':
        return action.data

    default:
      return state
  }
}

export default collectionReducer