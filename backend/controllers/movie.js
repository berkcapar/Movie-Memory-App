const movieRouter = require('express').Router()
const movieService = require('../services/Movie')

movieRouter.get('/', async (request, response) => {
  /*
  `localhost:3000/movies?keyword=berk`
  `query ===> ?'den sonraki kisim, key=value pairlari var burda`
  `req.query otomatik olarak bunlari decode ediyor`
  
  `birden fazla query param gonderiyorken de & isaretiyle ayiriyoruz`
  `ornegin: localhost:3000/movies?keyword=berk&year=100` yazdigimizda
  `req.q ery{ keyword: "berk", year: "100" } olan bir obje olarak decode ediliyor
  */

  // const query = req.query
  // query.keyword ile asagidaki kullanim ayni
  const { keyword } = request.query

  try {
    // const response = await movieService.fetchMoviesByKeyword(keyword)
    // response.data yapmak yerine, kolaylikolsundiye asagdaki
    const { data } = await movieService.fetchMoviesByKeyword(keyword)

    //const filteredMovies = data.movies.Search.map(movie => ({ imdbID: movie.imdbID, Title: movie.Title }))
    response.send({movies:data})
    // karsiya dondugumuz cevap: `{ movies: [{ id: ..}, {}] }`
  } catch (error) {
    console.log(error)
    response.status(500).send({ message: 'An error occurred', details: error })
  }
})

module.exports = movieRouter

/* 
const mapImdbApiAlternative2020SonResponseToMovieObject = (movieFetchedFromApi) => ({
  id: movieFetchedFromApi.idmb_id,
  name: ...title,
})

const mapMovies = response.data.map(mapImdbApiAlternative2020SonResponseToMovieObject)
*/