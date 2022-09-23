require('dotenv').config()
const { createClient } = require('@supabase/supabase-js')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

module.exports = {
  root: (req, res) => {
    try {
      res.status(200).sendFile(path.join(__dirname, '/public/index.html'))
    } catch (error) {
      console.log('error sending index.html', error)
      res.sendStatus(400)
    }
  },
  getCommands: async (req, res) => {
      const { data: commands, error } = await supabase
        .from('commands')
        .select('*')
      console.log(commands)
      res.status(200).send(commands)
      if (error) {
        res.send(error)
        return
      }
      res.send(data)
  },
  insertCommand: async (req, res) => {
    const { command } = req.body
    
      const { data, error } = await supabase
        .from('commands')
        .insert([{ id: uuidv4(), command: command }])
        if (error) {
          res.send(error)
          return
        }
        res.send(data)
  },
  deleteCommand: async (req, res) => {
    const { data, error } = await supabase
  .from('commands')
  .delete()
      .match({ id: req.params.id })
    if (error) {
      res.send(error)
      return
    }
    res.send(data)
  },
  updateCommand: async (req, res) => {
    const { command } = req.body
    const {id} = req.params
    const { data, error } = await supabase
  .from('commands')
  .update({ command: command })
      .match({ id: id })
      if (error) {
        res.send(error)
        return
      }
      res.send(data)
  }  
}
