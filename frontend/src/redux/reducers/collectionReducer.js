import movieService from '../../services/movie'

export const newMovie = (title, poster) => {
  return async dispatch => {
    const watchedMovie = await movieService.addmovies({ title, poster })

    dispatch({
      type: 'ADD_MOVIE',
      data: watchedMovie
    })
  }
}

const collectionReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_MOVIE':
      return [...state, action.data]

    default:
      return state
  }
}

export default collectionReducer