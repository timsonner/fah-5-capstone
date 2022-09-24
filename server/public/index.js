const baseURL = `http://localhost:4004/commands`

const getCommands = async () => {
  try {
    let res = await axios.get(baseURL)
    // res.data.forEach((element) => {
    //   // create view using element
    // })
    console.log(`🟢 getCommands()`)
    //   return res.data
  } catch (error) {
    console.log(`🔴 getCommands(): ${error}`)
  }
}

const postCommand = async (command) => {
    const object = {
        id: uuidv4(),
        command: command
    }
  try {
    const res = await axios.post(baseURL, object)
    console.log(`🟢 postCommand()`)
  } catch (error) {
    console.log(`🔴 postCommand(): ${error}`)
  }
  location.reload()
}

// const helperPostCommand = () => {
//   const object = {
//     // id: uuidv4(),
//     // command: reference an html input element's value
//   }
//   try {
//     postCommand(object)
//     console.log(`🟢 helperPostCommand()`)
//   } catch (error) {
//     console.log(`🔴 helperPostCommand(): ${error}`)
//   }
// }

const putCommand = async (id, command) => {
  try {
    const url = baseURL + '/' + id
    const res = await axios.put(url, { command: command })
    console.log(`🟢 putCommand()`)
  } catch (error) {
    console.log(`🔴 putCommand(${error})`)
  }
    // trigger dom refresh
}
const delCommand = async (id) => {
  try {
    const url = baseURL + '/' + id
    const res = await axios.delete(url, id)
    console.log(`🟢 removeCommand()`)
  } catch (error) {
    console.log(`🔴 removeCommand(${error})`)
  }
    // trigger dom refresh
}

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

