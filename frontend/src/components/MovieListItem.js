import React,{useState} from 'react'
import movieService from '../services/movie'

const MovieListItem = ({ movie }) => {
    const [loading, setLoading] = useState(false)
    const [watched, setWatched] = useState(false)

    const addMovie = async (event) => {
        setLoading(true)

        try {
          const watchedmovie = await movieService.addmovies(
            { title: movie.Title, poster: movie.Poster }
          )
          setWatched(watchedmovie)
      } catch(execption){
        console.log('Try to add again!')
      } finally {
          setLoading(false)
      }
    }

    return (
        <div className='moviecard'>
          <h2 className='movietitle'>{movie.Title}</h2>
            <img src={movie.Poster}/>
            <button disabled={loading} onClick={addMovie} type ="submit">{loading ? 'Adding' : 'Add to Your Collection!'}</button>
        </div>
    )
}

export default MovieListItem