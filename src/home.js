export default function home () {
  const content = document.querySelector('#content')
    const header = document.createElement('div')
    const headerHeading = document.createElement('h1')
    const headerOptions = document.createElement('div')
    const headerHome = document.createElement('button')
    const headerMenu = document.createElement('button')
    const headerContact = document.createElement('button')
    const contentBody = document.createElement('div')
    const contentFlavor = document.createElement('div')
    const contentFlavorHead = document.createElement('h2')
    const contentFlavorSubtext = document.createElement('div')
    const contentFlavorBtn = document.createElement('button')
    const contentBottom = document.createElement('div')
    const contentBottomLocation = document.createElement('div')
    const contentBottomWorktime = document.createElement('div')
    contentFlavorHead.textContent = 'Dodjite na neodoljivu picu u centru grada!'
    contentFlavorSubtext.textContent = 'Ukusno i jeftino'
    contentFlavorBtn.textContent = 'Naruci'
    contentFlavorHead.classList.add('flavor-heading')
    contentFlavorSubtext.classList.add('flavor-subtext')
    contentFlavorBtn.classList.add('flavor-orderBtn')
    contentBody.classList.add('content-body')
    contentFlavor.classList.add('content-flavor')
    contentBottomLocation.textContent = 'Banja Luka'
    contentBottomWorktime.textContent = 'Od jutra do Sutra'
    contentBottomWorktime.classList.add('bottom-worktime')
    contentBottomLocation.classList.add('bottom-location')
    contentBottom.classList.add('content-bottom')
    headerHome.textContent = 'Home'
    headerMenu.textContent = 'Menu'
    headerContact.textContent = 'Contact'
    headerHeading.textContent = 'Ciao Amore'
    headerHome.setAttribute("id", "homeBtn")
    headerMenu.setAttribute("id", "menuBtn")
    headerContact.setAttribute("id", "contactBtn")
    header.classList.add('header')
    headerHeading.classList.add('header-name')
    headerOptions.classList.add('header-options')
    header.appendChild(headerHeading)
    header.appendChild(headerOptions)
    headerOptions.appendChild(headerHome)
    headerOptions.appendChild(headerMenu)
    headerOptions.appendChild(headerContact)
    contentFlavor.appendChild(contentFlavorHead)
    contentFlavor.appendChild(contentFlavorSubtext)
    contentFlavor.appendChild(contentFlavorBtn)
    contentBottom.appendChild(contentBottomLocation)
    contentBottom.appendChild(contentBottomWorktime)
    contentBody.appendChild(contentFlavor)
    contentBody.appendChild(contentBottom)
    content.appendChild(header)
    content.appendChild(contentBody)
    
}