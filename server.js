// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const { root, commands } = require('./controller.js')


app.use(express.json())
app.use(cors())

app.get('/', root)
app.get('/commands', commands)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))