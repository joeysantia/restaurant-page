export function contactCreate() { 
    const main = document.querySelector('main')
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }

    const locationsHeading = document.createElement('h2')
    locationsHeading.textContent = 'Locations'
    main.appendChild(locationsHeading)

    const downtownHeading = document.createElement('h3')
    downtownHeading.textContent = 'Downtown'
    main.appendChild(downtownHeading)

    const downtownAddress = document.createElement('p')
    downtownAddress.textContent = '123 Main Street'
    main.appendChild(downtownAddress)

    const downtownCityAddress = document.createElement('p')
    downtownCityAddress.textContent = 'State City, USA 12344'
    main.appendChild(downtownCityAddress)

    const downtownPhoneNumber = document.createElement('p')
    downtownPhoneNumber.textContent = '(123) 456-7890'
    main.appendChild(downtownPhoneNumber)

    const westSideHeading = document.createElement('h3')
    westSideHeading.textContent = 'West Side'
    main.appendChild(westSideHeading)

    const westSideAddress = document.createElement('p')
    westSideAddress.textContent = '456 7th Street'
    main.appendChild(westSideAddress)

    const westSideCityAddress = document.createElement('p')
    westSideCityAddress.textContent = 'State City, USA 12345'
    main.appendChild(westSideCityAddress)

    const westSidePhoneNumber = document.createElement('p')
    westSidePhoneNumber.textContent = '(234) 567-8901'
    main.appendChild(westSidePhoneNumber)

    const greenHillsHeading = document.createElement('h3')
    greenHillsHeading.textContent = 'Green Hills'
    main.appendChild(greenHillsHeading)

    const greenHillsAddress = document.createElement('p')
    greenHillsAddress.textContent = '789 Hillside Ave'
    main.appendChild(greenHillsAddress)

    const greenHillsCityAddress = document.createElement('p')
    greenHillsCityAddress.textContent = 'State City, USA 12346'
    main.appendChild(greenHillsCityAddress)

    const greenHillsPhoneNumber = document.createElement('p')
    greenHillsPhoneNumber.textContent = '(345) 678-9012'
    main.appendChild(greenHillsPhoneNumber)

    const contactUsHeading = document.createElement('h2')
    contactUsHeading.textContent = 'Contact Us'
    main.appendChild(contactUsHeading)

    const form = document.createElement('form')
    main.appendChild(form)

   

    const nameLabel = document.createElement('label')
    nameLabel.setAttribute('for', 'name')
    nameLabel.textContent = 'Name: '
    form.appendChild(nameLabel)

    const nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('name', 'name')
    nameInput.setAttribute('id', 'name')
    nameInput.setAttribute('required',' required')
    form.appendChild(nameInput)

    const emailLabel = document.createElement('label')
    emailLabel.setAttribute('for', 'email')
    emailLabel.textContent = 'Email Address: '
    form.appendChild(emailLabel)

    const emailInput = document.createElement('input')
    emailInput.setAttribute('type', 'email')
    emailInput.setAttribute('name', 'email')
    emailInput.setAttribute('id', 'email')
    emailInput.setAttribute('required', 'required')
    form.appendChild(emailInput)

    const messageLabel = document.createElement('label')
    messageLabel.setAttribute('for', 'message')
    messageLabel.textContent = 'Message: '
    form.appendChild(messageLabel)

    const messageInput = document.createElement('textarea')
    messageInput.setAttribute('name', 'message')
    messageInput.setAttribute('id', 'message')
    messageInput.setAttribute('rows', '20')
    messageInput.setAttribute('cols', '60')
    messageInput.setAttribute('required', 'required')
    form.appendChild(messageInput)

    const submitButton = document.createElement('button')
    submitButton.textContent = 'Send'
    form.appendChild(submitButton)

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        while (main.firstChild) {
            main.removeChild(main.lastChild)
        }

        const thanksHeading = document.createElement('h2')
        thanksHeading.textContent = 'Thanks for your message!'
        main.appendChild(thanksHeading)

        const thanksBody = document.createElement('p')
        thanksBody.textContent = 'Please allow us 1-3 business days to respond.'
        main.appendChild(thanksBody)

        const thanksFooter = document.createElement('p')
        thanksFooter.textContent = 'Have a nice day!'
        main.appendChild(thanksFooter)
    })
}