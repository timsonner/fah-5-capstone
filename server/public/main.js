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





const docBody = document.querySelector('body')
docBody.classList.add("flex", "flex-row", "justify-center", "font-mono")
const section = document.createElement('section')
section.classList.add("flex", "justify-center", "bg-black", "px-8")
docBody.appendChild(section)
const heading = document.createElement('h2')
heading.textContent = 'FAH-5-Capstone'
heading.classList.add("text-green-500", "font-thin")
section.appendChild(heading)
