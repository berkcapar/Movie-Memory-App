const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')


mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(cors())
app.use(express.static('build'))



app.use('/api/signup', usersRouter)
app.use('/api/login', loginRouter)

module.exports = app