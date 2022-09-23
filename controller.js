require('dotenv').config();
const { spawn } = require("child_process")
 


module.exports = {
    foo: (req, res) => {
        res.send('made it to controller')
    }
   
    // spawn: async (req, res) => {

    //     let output = ''
    //     const makeSystemCall = (command) => {
    //         const systemCall = spawn(command)
        
    //         systemCall.stdout.on(`data`, (data) => {
    //             output += data
    //             console.log(`stdout: ${data}`)
    //         })
        
    //         systemCall.stderr.on(`data`, (data) => {
    //             console.error(`stderr: ${data}`)
    //         })
        
    //         systemCall.on(`close`, (code) => {
    //             console.log(`child process exited with code ${code}`)
    //         })
    //     }

    //     try {
    //         const { data: commands, error } = await supabase.from('commands').select('*')
    //         console.log(commands)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // makeSystemCall('ls')

    // }
}






