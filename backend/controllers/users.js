const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('movies', { title:1 })
  response.json(users)
})

usersRouter.post('/', async (request,response) => {
  if ( !request.body.password || request.body.password.length<3 ) {
    return response.status(400).send({
      error: 'password must min length 3'
    })
  }

  const body = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    name: body.name,
    email: body.email,
    passwordHash
  })

  const savedUser = await user.save()
  response.status(201).json(savedUser.toJSON())
})


const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    return authorization.substring(7)
  }
  return null
}

usersRouter.get('/movies', async (request, response) => {
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET) // eslint-disable-line

  if (!token || !decodedToken.id ){
    return response.status(401).json({ error:'token is missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  response.status(200).json({ watchedMovies: user.watchedMovies })
})

usersRouter.post('/movies', async (request, response) => {
  const { imdbID, title, poster } = request.body
  const token = getTokenFrom(request)
  const decodedToken = jwt.verify(token, process.env.SECRET) // eslint-disable-line

  if (!token || !decodedToken.id ){
    return response.status(401).json({ error:'token is missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)

  user.watchedMovies = user.watchedMovies.concat({
    title,
    poster,
    imdbID,
  })

  await user.save()
  response.status(201).json(user.toJSON())
})


module.exports = usersRouter