const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    unique: true
  },
  email:{
    type: String,
    unique: true
  },
  passwordHash: String,
  movies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie'
    }
  ]
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})


const User = mongoose.model('User', userSchema)

module.exports = User