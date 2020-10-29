import movieService from "../../services/movie"


const searchReducer = (state = [], action ) => {
    switch (action.type) {
        case 'SEARCH':
            return action.movies
           default:
               return state    
       
    }
}

export const search = (keyword) => {
    return async dispatch => {
        const movies  = await movieService.searchmovies(keyword)   
        dispatch({
        type: 'SEARCH',
        movies
     })
    }
}

export default searchReducer