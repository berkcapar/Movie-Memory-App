const bcrypt = require('bcrypt')
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


module.exports = usersRouter