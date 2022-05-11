import { menuCreate } from './menu'
import { contactCreate } from './contact'
import WelcomeImage from './pizza.jpeg'

export function homeCreate() {
    const main = document.querySelector('main')

    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }

    const welcomeContainer = document.createElement('div')
    welcomeContainer.classList.add('welcome-container')
    main.appendChild(welcomeContainer)

    const welcomeTextContainer = document.createElement('div')
    welcomeTextContainer.classList.add('welcome-text-container')
    welcomeContainer.appendChild(welcomeTextContainer)

    const welcomeHeadingOne = document.createElement('h3')
    welcomeHeadingOne.textContent = 'Fresh. Organic.'
    welcomeTextContainer.appendChild(welcomeHeadingOne)

    const welcomeHeadingTwo = document.createElement('h3')
    welcomeHeadingTwo.textContent = 'From Our family to Yours'
    welcomeTextContainer.appendChild(welcomeHeadingTwo)

    const welcomeImage = new Image() 
    welcomeImage.src = WelcomeImage
    welcomeContainer.appendChild(welcomeImage)

    const blurb = document.createElement('p')
    blurb.textContent = `Ever since Papa Luigi opened our West Side location in 1973, we have been proudly
                        serving the metropolitan area, serving up the same classic recipes with modern twists.
                        As any of our loyal customers can tell you, you can't get better than Luigi's!`
    main.appendChild(blurb)

    const menuLinkParagraph = document.createElement('p')
    main.appendChild(menuLinkParagraph)

    const menuLinkOne = document.createElement('span')
    menuLinkOne.textContent = 'Interested in learning more? Check out our '
    menuLinkParagraph.appendChild(menuLinkOne)

    const menuLinkTwo = document.createElement('a')
    menuLinkTwo.textContent = 'menu.'
    menuLinkTwo.style.color = 'blue'
    menuLinkTwo.addEventListener('click', (e) => {
        menuCreate()
    })
    menuLinkParagraph.appendChild(menuLinkTwo)

    const contactLinkParagraph = document.createElement('p')
    main.appendChild(contactLinkParagraph)

    const contactLinkOne = document.createElement('span')
    contactLinkOne.textContent = 'Or come visit us at one of our '
    contactLinkParagraph.appendChild(contactLinkOne)

    const contactLinkTwo = document.createElement('a')
    contactLinkTwo.textContent = 'locations.'
    contactLinkTwo.style.color = 'blue'
    contactLinkTwo.addEventListener('click', (e) => {
        contactCreate()
    })
    contactLinkParagraph.appendChild(contactLinkTwo)
}