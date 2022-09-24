// const { getCommand, postCommand, putCommand, deleteCommand } = require('./index.js')

const docBody = document.querySelector('body')
const section = document.createElement('section')
docBody.appendChild(section)
const heading = document.createElement('h2')
heading.textContent = 'FAH-5-Capstone'
heading.classList.add("text-blue-50", "font-thin")
section.appendChild(heading)