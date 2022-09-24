
const docBody = document.querySelector('body')
docBody.classList.add("flex", "flex-row", "justify-center", "font-mono")
const section = document.createElement('section')
section.classList.add("flex", "justify-center", "bg-black", "px-8")
docBody.appendChild(section)
const heading = document.createElement('h2')
heading.textContent = 'FAH-5-Capstone'
heading.classList.add("text-green-500", "font-thin")
section.appendChild(heading)
