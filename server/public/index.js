const { spawn } = require('child_process')

      let output = ''
      const makeSystemCall = (command) => {
          const systemCall = spawn(command)

          systemCall.stdout.on(`data`, (data) => {
              output += data
              console.log(`stdout: ${data}`)
          })

          systemCall.stderr.on(`data`, (data) => {
              console.error(`stderr: ${data}`)
          })

          systemCall.on(`close`, (code) => {
              console.log(`child process exited with code ${code}`)
          })
      }
//   makeSystemCall('ls')

