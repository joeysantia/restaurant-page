
export function menuCreate() {

    const main = document.querySelector('main')
    while (main.firstChild) {
        main.removeChild(main.lastChild)
    }

    const antipastiHeading = document.createElement('h2')
    antipastiHeading.textContent = 'Antipasti'
    main.appendChild(antipastiHeading)

    const antipastiGrid = document.createElement('section')
    main.appendChild(antipastiGrid)

    const calamari = document.createElement('div')
    antipastiGrid.appendChild(calamari)

    const calamariHeading = document.createElement('h3')
    calamariHeading.textContent = 'Calamari'
    calamari.appendChild(calamariHeading)

    const calamariDescription = document.createElement('p')
    calamariDescription.textContent = `fresh tender squid lightly dusted in flour,
                                        deep fried in vegetable oil served with a side 
                                        of house-made marinara sauce`
    calamari.appendChild(calamariDescription)

    const calamariPrice = document.createElement('h3')
    calamariPrice.textContent = '$18.00'
    calamari.appendChild(calamariPrice)

    const shrimp = document.createElement('div')
    antipastiGrid.appendChild(shrimp)

    const shrimpHeading = document.createElement('h3')
    shrimpHeading.textContent = 'Shrimp'
    shrimp.appendChild(shrimpHeading)

    const shrimpDescription = document.createElement('p')
    shrimpDescription.textContent = `shrimp lightly dusted in flour deep
                                        fried in vegetable oil served with
                                        a side of house-made marinara sauce.`
    shrimp.appendChild(shrimpDescription)

    const shrimpPrice = document.createElement('h3')
    shrimpPrice.textContent = '$16.00'
    shrimp.appendChild(shrimpPrice)

    const clams = document.createElement('div')
    antipastiGrid.appendChild(clams)

    const clamsHeading = document.createElement('h3')
    clamsHeading.textContent = 'Baked Clams'
    clams.appendChild(clamsHeading)

    const clamsDescription = document.createElement('p')
    clamsDescription.textContent = `baked with seasoned bread crumbs in
                                a lemon and wine pouch.`
    clams.appendChild(clamsDescription)

    const clamsPrice = document.createElement('h3')
    clamsPrice.textContent = '$16.00'
    clams.appendChild(clamsPrice)

    const garlicBread = document.createElement('div')
    antipastiGrid.appendChild(garlicBread)

    const garlicBreadHeading = document.createElement('h3')
    garlicBreadHeading.textContent = 'Garlic Bread'
    garlicBread.appendChild(garlicBreadHeading)

    const garlicBreadDescription = document.createElement('p')
    garlicBreadDescription.textContent = `bread briquettes toasted with
                                          minced fresh garlic, oregano, 
                                          grated cheese, drizzled olive
                                          oil.`
    garlicBread.appendChild(garlicBreadDescription)

    const garlicBreadPrice = document.createElement('h3')
    garlicBreadPrice.textContent = '$8.00'
    garlicBread.appendChild(garlicBreadPrice)

    
    
    const pizzaHeading = document.createElement('h2')
    pizzaHeading.textContent = 'Pizza'
    main.appendChild(pizzaHeading)

    const pizzaGrid = document.createElement('section')
    main.appendChild(pizzaGrid)

    const marinara = document.createElement('div')
    pizzaGrid.appendChild(marinara)

    const marinaraHeading = document.createElement('h3')
    marinaraHeading.textContent = 'Marinara'
    marinara.appendChild(marinaraHeading)

    const marinaraDescription = document.createElement('p')
    marinaraDescription.textContent = `tomato sauce, minced garlic, 
                                        oregano, olive oil.`
    marinara.appendChild(marinaraDescription)

    const marinaraPrice = document.createElement('h3')
    marinaraPrice.textContent = '$11.00'
    marinara.appendChild(marinaraPrice)

    const margherita = document.createElement('div')
    pizzaGrid.appendChild(margherita)

    const margheritaHeading = document.createElement('h3')
    margheritaHeading.textContent = 'Margherita'
    margherita.appendChild(margheritaHeading)

    const margheritaDescription = document.createElement('p')
    margheritaDescription.textContent = `fresh mozzarella, tomato 
                                         sauce, olive oil, grated
                                         cheese, basil.`
    margherita.appendChild(margheritaDescription)

    const margheritaPrice = document.createElement('h3')
    margheritaPrice.textContent = '$12.50'
    margherita.appendChild(margheritaPrice)

    const pugliese = document.createElement('div')
    pizzaGrid.appendChild(pugliese)

    const puglieseHeading = document.createElement('h3')
    puglieseHeading.textContent = 'Pugliese'
    pugliese.appendChild(puglieseHeading)

    const puglieseDescription = document.createElement('p')
    puglieseDescription.textContent = `Tomato sauce, sausage, fresh
                                        mozzarella, broccoli rabe, 
                                        garlic, grated cheese, 
                                        olive oil.`
    pugliese.appendChild(puglieseDescription)

    const pugliesePrice = document.createElement('h3')
    pugliesePrice.textContent = '$16.50'
    pugliese.appendChild(pugliesePrice)

    const napoletana = document.createElement('div')
    pizzaGrid.appendChild(napoletana)

    const napoletanaHeading = document.createElement('h3')
    napoletanaHeading.textContent = 'Napoletana'
    napoletana.appendChild(napoletanaHeading)

    const napoletanaDescription = document.createElement('p')
    napoletanaDescription.textContent = `Tomato sauce, fresh 
                                         fresh mozzarella, soppressata,
                                         grated cheese, olive oil.`
    napoletana.appendChild(napoletanaDescription)

    const napoletanaPrice = document.createElement('h3')
    napoletanaPrice.textContent = '$15.00'
    napoletana.appendChild(napoletanaPrice)

    const dessertsHeading = document.createElement('h2')
    dessertsHeading.textContent = 'Desserts'
    main.appendChild(dessertsHeading)

    const dessertsGrid = document.createElement('section')
    main.appendChild(dessertsGrid)

    const cheesecake = document.createElement('div')
    dessertsGrid.appendChild(cheesecake)

    const cheesecakeHeading = document.createElement('h3')
    cheesecakeHeading.textContent = 'Italian Cheesecake'
    cheesecake.appendChild(cheesecakeHeading)

    const cheesecakePrice = document.createElement('h3')
    cheesecakePrice.textContent = '$6.00'
    cheesecake.appendChild(cheesecakePrice)

    const redVelvet = document.createElement('div')
    dessertsGrid.appendChild(redVelvet)

    const redVelvetHeading = document.createElement('h3')
    redVelvetHeading.textContent = 'Red Velvet Cupcake'
    redVelvet.appendChild(redVelvetHeading)

    const redVelvetPrice = document.createElement('h3')
    redVelvetPrice.textContent = '$6.00'
    redVelvet.appendChild(redVelvetPrice)

    const espresso = document.createElement('div')
    dessertsGrid.appendChild(espresso)

    const espressoHeading = document.createElement('h3')
    espressoHeading.textContent = 'Espresso Affogato'
    espresso.appendChild(espressoHeading)

    const espressoPrice = document.createElement('h3')
    espressoPrice.textContent = '$8.00'
    espresso.appendChild(espressoPrice)

    const mousse = document.createElement('div')
    dessertsGrid.appendChild(mousse)

    const mousseHeading = document.createElement('h3')
    mousseHeading.textContent = 'Black & White Chocolate Mousse'
    mousse.appendChild(mousseHeading)

    const moussePrice = document.createElement('h3')
    moussePrice.textContent = '$6.00'
    mousse.appendChild(moussePrice)


}