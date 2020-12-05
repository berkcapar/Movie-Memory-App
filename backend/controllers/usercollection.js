const User = require('../models/user')
const userCollectionRouter = require('express').Router()

userCollectionRouter.get('/:id', async (request, response) => {
  const usercollection = await User.findById(User.movies)
  response.json(usercollection)
  console.log(usercollection)
})

module.exports = userCollectionRouter