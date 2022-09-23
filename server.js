require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
// const {foo} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(`Okay, we're doing it this way`)
})

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))