// Write your code here!
let mainElement = document.querySelector('main#main')
mainElement.remove()

let element = document.createElement('h1')
document.body.appendChild(element)
element.id = 'victory'
let newHeader = document.querySelector('h1#victory')
newHeader.innerHTML = "YOUR-NAME is the champion"