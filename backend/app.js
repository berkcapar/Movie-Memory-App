const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const movieRouter = require('./controllers/movie')


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

app.use('/api/login', loginRouter)

// @TODO: REQUIRE AUTHENTICATION
app.use('/api/users', /* authMiddleware, */ usersRouter)
app.use('/api/movies', movieRouter)

module.exports = app

// http://localhost:3003/api/movies?keyword=batman

// portta calisan processleri kill etmek icun
// kill -9 $(lsof -t -i:3003)
