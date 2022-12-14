require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { SERVER_PORT } = process.env
const { root, main, spawn, getCommands, insertCommand, deleteCommand, updateCommand,} = require('./controller.js')

// meedleware didi
app.use(express.json())
app.use(cors())

// routes
app.get('/', root)
app.get('/main', main)
app.post('/spawn', spawn)
app.get('/commands', getCommands)
app.post('/commands', insertCommand)
app.delete('/commands/:id', deleteCommand)
app.put(`/commands/:id`, updateCommand)

app.listen(SERVER_PORT, () => console.log(`Express() up on ${SERVER_PORT}`))
