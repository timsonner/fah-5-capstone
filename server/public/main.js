const { getCommand, postCommand, putCommand, deleteCommand } = require('./index.js')

const docBody = document.querySelector('body')
const heading = docBody.createElement('h1')
docBody.appendChild(heading)
heading.textContent = `Made it to main.js`