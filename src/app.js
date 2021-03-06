require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

app.use(morgan('common'))
app.use(helmet())
app.use(cors())
app.use(express.json())

const cloudinaryRouter = require('./cloudinary')

app.use('/api', cloudinaryRouter)

app.get('/', (req, res) => {
    res.send('Server Running!')
})

module.exports = app