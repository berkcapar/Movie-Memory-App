const movieRouter = require('express').Router()
const movieService = require('../services/Movie')
const jwt = require('jsonwebtoken')
const Movie = require('../models/movie')
const User = require('../models/user')

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
    // data => { Search }

    // const karsidanGelenData = { Search: [...] }
    // const benimFrontendimeGondermekIStedigimDAta = { movies: [...] }

    //const filteredMovies = data.Search.map(movie => ({ imdbID: movie.imdbID, Title: movie.Title }))
    response.send({ movies: data.Search })
    // karsiya dondugumuz cevap: `{ movies: [{ id: ..}, {}] }`
  } catch (error) {
    console.log(error)
    response.status(500).send({ message: 'An error occurred', details: error })
  }
})

movieRouter.post('/', async (request, response) => {
  const { title, poster } = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  console.log(request.token)

  if(!request.token || !decodedToken.id ){
    return response.status(401).json({ error:'token is missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  const movie = new Movie({
    title,
    poster,
    user
  })

  const savedMovie = await movie.save()
  user.movies = user.movies.concat(savedMovie._id)
  await user.save()
  response.json(savedMovie)

  // const watcheddetails = new Movie(request.body)

  // const user = await User.findById(request.user.id)

// const savedMovie = await watcheddetails.save()
// response.status(201).json(savedMovie.toJSON())
})

module.exports = movieRouter

/*
const mapImdbApiAlternative2020SonResponseToMovieObject = (movieFetchedFromApi) => ({
  id: movieFetchedFromApi.idmb_id,
  name: ...title,
})

const mapMovies = response.data.map(mapImdbApiAlternative2020SonResponseToMovieObject)
*/