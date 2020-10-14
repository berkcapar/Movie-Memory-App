const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  Title: {
    type:String
  },
  Poster: {
    type:String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie