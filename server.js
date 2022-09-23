require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
// const {foo} = require('./controller.js')
// const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
// const supabase = createClient(
//   process.env.URL,
//   process.env.ANON_KEY
// )

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send(`Okay, we're doing it this way`)
})

 app.get('/commands', async (req, res) => {
        try {
            const { data: commands, error } = await supabase.from('commands').select('*')
            console.log(commands)
            res.status(200).send('get got')
        } catch (error) {
            console.log(error)
        }
    })

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))