import home from './home.js'
import menu from './menu.js'
import homeNoHead from './homeNoHead.js'
import contact from './contact.js'
import './styles/style.css'
home()
const homeBtn = document.querySelector('#homeBtn')
const menuBtn = document.querySelector('#menuBtn')
const contactBtn = document.querySelector('#contactBtn')
homeBtn.addEventListener('click', function () {
    const contentBody = document.querySelector('.content-body')
    contentBody.replaceChildren()
    homeNoHead(contentBody)
})

menuBtn.addEventListener('click', function() {
    const contentBody = document.querySelector('.content-body')
    contentBody.replaceChildren()
    menu(contentBody)
})

contactBtn.addEventListener('click', function () {
    const contentBody = document.querySelector('.content-body')
    contentBody.replaceChildren()
    contact(contentBody)
})