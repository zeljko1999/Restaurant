export default function menu (contentBody) {
    let i = 0;
    const art = []
    const artImg = []
    const artName = []
    const artIngredients = []
    const menuDiv = document.createElement('div')
    const menuTitle = document.createElement('h2')
    menuTitle.classList.add('menu-title')
    menuTitle.textContent = 'Menu'
    for (i=0;i<5;i++){
        art[i] = document.createElement('div')
        artImg[i] = document.createElement('img')
        artImg[i].classList.add('menu-article-img')
        art[i].classList.add('menu-article')
        artName[i] = document.createElement('div')
        artIngredients[i] = document.createElement('div')
        artName[i].classList.add('menu-article-name')
        artIngredients[i].classList.add('menu-article-ingredients')
    }
    artImg[0].src = '../src/ciao1.avif'
    artImg[1].src = '../src/ciao2.webp'
    artImg[2].src = '../src/ciao3.webp'
    artImg[3].src = '../src/ciao4.webp'
    artImg[4].src = '../src/ciao5.webp'
    artName[0].textContent = 'Focaccia Bogata Pelat'
    artIngredients[0].textContent = 'Mozzarella, kobasica, slanina, Gorgonzola sir'
    artName[1].textContent = 'Focaccia Amatriciana Mozzarella '
    artIngredients[1].textContent = 'Pelat, cherry paradajz, slanina i Parmezan'
    artName[2].textContent = 'Pizza Crudo e ruccola 34 cm '
    artIngredients[2].textContent = 'Paradajz sos, Mozzarella, pršut, cherry, rukola'
    artName[3].textContent = 'Pizza Quattro Staggioni 34 cm '
    artIngredients[3].textContent = ' Paradajz sos, Mozzarella, gljive, šunka, pancetta, kobasica, kapari'
    artName[4].textContent = 'Pizza Carbonara 34 cm Paradajz sos '
    artIngredients[4].textContent = 'Mozzarella, šunka, italijanska kobasica, pancetta'
    menuDiv.classList.add('menu-div')
    for (i=0;i<5;i++){
        art[i].appendChild(artImg[i])
        art[i].appendChild(artName[i])
        art[i].appendChild(artIngredients[i])
    }
    for (i=0;i<5;i++){
        menuDiv.appendChild(art[i])
    }
    contentBody.appendChild(menuTitle)
    contentBody.appendChild(menuDiv)
    contentBody.classList.add('notHome')
}