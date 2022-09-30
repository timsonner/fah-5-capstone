const baseURL = document.location



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
// document body
const docBody = document.querySelector('body')
docBody.classList.add("flex", "flex-row", "justify-center", "font-mono")
// heading section
const headingSection = document.createElement('section')
headingSection.classList.add("flex", "flex-col", "justify-center", "bg-black", "px-8")
docBody.appendChild(headingSection)
const heading = document.createElement('h2')
heading.textContent = 'FAH-5-Capstone'
heading.classList.add("text-green-500", "font-thin")
headingSection.appendChild(heading)
// output section
const outputSection = document.createElement('section')
docBody.appendChild(outputSection)
const output = document.createElement('h3')
outputSection.appendChild(output)
// commandList section
const commandListSection = document.createElement('section')
docBody.appendChild(commandListSection)
const commandList = document.createElement('ul')
commandListSection.appendChild(commandList)

const getCommands = async () => {
    try {
      let res = await axios.get(baseURL)
      res.forEach((element) => {
        // create view using element
        const commandListItem = document.createElement('li')
          commandList.appendChild(commandListItem)
          commandListItem.textContent = JSON.stringify(element.data)
      })
      console.log(`🟢 getCommands()`)
      //   return res.data
    } catch (error) {
      console.log(`🔴 getCommands(): ${error}`)
    }
  }

getCommands()


const spawnCommand = async (command) => {
    const object = {
        command: command
    }
  try {
      const res = await axios.post(`${baseURL}spawn`, object)
      console.log(`🟢 spawnCommand(): ${res.data}`)
      console.log(`typof: ${typeof (res.data)}`)
      output.textContent = `${res.data}`
      return res.data
  } catch (error) {
    console.log(`🔴 spawnCommand(): ${error}`)
  }
    // trigger dom refresh
}

const foo = spawnCommand('uname')
