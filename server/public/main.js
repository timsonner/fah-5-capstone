const baseURL = document.location

const putCommand = async (id, command) => {
    try {
      const url = baseURL + "commands/" + id
      const res = await axios.put(url, { command: command })
      console.log(`🟢 putCommand()`)
    } catch (error) {
      console.log(`🔴 putCommand(${error})`)
    }
      // trigger dom refresh
  }

const delCommand = async (id) => {
  try {
    const url = baseURL + 'commands/' + id
    const res = await axios.delete(url, id)
    console.log(`🟢 removeCommand()`)
  } catch (error) {
    console.log(`🔴 removeCommand(${error})`)
  }
  // trigger dom refresh
}
// document body
const docBody = document.querySelector('body')
docBody.classList.add('flex', 'flex-col', 'justify-center', 'font-mono')
// heading section
const headingSection = document.createElement('section')
headingSection.classList.add(
  'flex',
  'flex-col',
  'justify-center',
  'bg-black',
  'px-8'
)
docBody.appendChild(headingSection)
const heading = document.createElement('h2')
heading.textContent = 'FAH-5-Capstone'
heading.classList.add('text-green-500', 'font-thin')
headingSection.appendChild(heading)
// output section
const outputSection = document.createElement('section')
docBody.appendChild(outputSection)
const output = document.createElement('h3')
outputSection.appendChild(output)
outputSection.classList.add('bg-blue-400')
// commandList section
const commandListSection = document.createElement('section')
docBody.appendChild(commandListSection)
// add a command
const commandInputAdd = document.createElement('input')
commandListSection.appendChild(commandInputAdd)
commandInputAdd.setAttribute('placeholder', 'Add a command')
const buttonAdd = document.createElement('button')
commandListSection.appendChild(buttonAdd)
buttonAdd.textContent = 'Add'
// list
const commandList = document.createElement('ul')
commandListSection.appendChild(commandList)
commandListSection.classList.add('bg-gray-400')

const spawnCommand = async (command) => {
    const object = {
      command: command,
    }
    try {
      const res = await axios.post(`${baseURL}spawn`, object)
      console.log(`🟢 spawnCommand(): ${res.data}`)
      console.log(`typof: ${typeof res.data}`)
      // this is where data is reflected in the view
      output.textContent = `${res.data}`
      return res.data
    } catch (error) {
      console.log(`🔴 spawnCommand(): ${error}`)
    }
    // trigger dom refresh
  }

const logValue = (event) => {
  // console.log(`value: ${commandInputAdd.value}`)
}

const postCommand = async () => {
  try {
    const url = baseURL + 'commands'
    const res = await axios.post(url, { command: commandInputAdd.value })
    console.log(`🟢 postCommand()`)
  } catch (error) {
    console.log(`🔴 postCommand(${error})`)
  }
  // trigger dom refresh
}
buttonAdd.addEventListener('click', postCommand)

// this func actually contains all the command list elements in the ui
const getCommands = async () => {
  try {
    let res = await axios.get(`${baseURL}commands`)
    res.data.forEach((element) => {
      // create view using element
      const commandListItem = document.createElement('li')
      commandList.appendChild(commandListItem)
    //   commandListItem.textContent = JSON.stringify(element.command)
              commandListItem.textContent = element.command

      const buttonDeleteCommand = document.createElement('button')
      commandList.appendChild(buttonDeleteCommand)
      buttonDeleteCommand.textContent = 'Delete'
      const delHelper = () => {
        delCommand(element.id)
      }
        buttonDeleteCommand.addEventListener('click', delHelper)
        const inputEditCommand = document.createElement('input')
        commandList.appendChild(inputEditCommand)
        inputEditCommand.setAttribute("placeholder", "Edit command...")
        const buttonEditCommand = document.createElement('button')
        commandList.appendChild(buttonEditCommand)
        buttonEditCommand.textContent = "Edit"
        const editHelper = () => {
    putCommand(element.id, inputEditCommand.value)
        }
        buttonEditCommand.addEventListener('click', editHelper)
        const buttonExecuteCommand = document.createElement('button')
        commandList.appendChild(buttonExecuteCommand)
        buttonEditCommand.textContent = "Execute"
        const spawnHelper = () => {
            spawnCommand(element.command)
        }
buttonExecuteCommand.addEventListener('click', spawnHelper)
    })
    
    console.log(`🟢 getCommands(): ${res.data}`)
    console.table(res.data)
    //   return res.data
  } catch (error) {
    console.log(`🔴 getCommands(): ${error}`)
  }
}

getCommands()
