import AboutImage from './about-photo.jpg'

export function aboutCreate() {
    const main = document.querySelector('main')
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }

    const aboutHeading = document.createElement('h1')
    aboutHeading.textContent = 'About Us'
    main.appendChild(aboutHeading)

    const aboutPhoto = new Image()
    aboutPhoto.src = AboutImage 
    main.appendChild(aboutPhoto)

    const bioOne = document.createElement('p')
    bioOne.textContent = `Papa Luigi opened the legendary West Side location in 1976. With hard work and a little luck, it turned
                          into a neighborhood institution. Before long, he opened another location downtown, and finally the 
                          Green Hills location joined the family in 2005.`
    main.appendChild(bioOne)

    const bioTwo = document.createElement('p')
    bioTwo.textContent = `The times have changed, but the same commitment to quality, home-grown food has stayed the same. Papa 
                          Luigi's Neapolitan recipes have been passed down and blended with modern traditions. So what are you 
                          waiting for - come on by and see for yourself!`
    main.appendChild(bioTwo)
}