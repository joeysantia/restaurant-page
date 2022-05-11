import './style.css'
import { homeCreate } from './home.js'
import { aboutCreate } from './about.js'
import { menuCreate } from './menu.js'
import { contactCreate } from './contact.js'
import Icon from './pizza.png'



const content = document.querySelector('#content')
/*
nav structure
nav flex container
left side: logo8jmmmnnmn m 
right side: ul with 4 li's 
*/

//content.textContent = 'Hello'
function pageLoad() {
    const nav = document.createElement('nav')
    content.appendChild(nav)
    
    const logo = document.createElement('div')
    logo.setAttribute('class', 'logo')
    logo.addEventListener('click', (e) => {
        homeCreate()
    })
    nav.appendChild(logo)

    const icon = new Image()
    icon.src = Icon;
    logo.appendChild(icon)

    const logoText = document.createElement('h1')
    logoText.textContent = `Luigi's`
    logo.appendChild(logoText)

    const tabList = document.createElement('ul')
    nav.appendChild(tabList)

    const home = document.createElement('li')
    home.textContent = 'Home'
    home.style.color = 'blue'
    tabList.appendChild(home)
    home.addEventListener('click', (e) => {
        homeCreate()
    })

    const about = document.createElement('li')
    about.textContent = 'About'
    about.addEventListener('click', (e) => {
       aboutCreate()
    })
    tabList.appendChild(about)

    const menu = document.createElement('li')
    menu.textContent = 'Menu'
    menu.addEventListener('click', (e) => {
        menuCreate()
    })
    tabList.appendChild(menu)

    const contact = document.createElement('li')
    contact.textContent = 'Contact'
    contact.addEventListener('click', (e) => {
        contactCreate()
    })
    tabList.appendChild(contact)

    const tabs = document.querySelectorAll('li')
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(tab =>  tab.style.color = 'black')
            tab.style.color = 'blue'
        })
    })

    const main = document.createElement('main')
    content.appendChild(main)

    const footer = document.createElement('footer')
    footer.textContent = `Copyright Luigi's Pizzeria`
    content.appendChild(footer)

    homeCreate()
}

document.onload = pageLoad()