export default function homeNoHead (contentBody) {
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
    contentFlavor.classList.add('content-flavor')
    contentBottomLocation.textContent = 'Banja Luka'
    contentBottomWorktime.textContent = 'Od jutra do Sutra'
    contentBottomWorktime.classList.add('bottom-worktime')
    contentBottomLocation.classList.add('bottom-location')
    contentBottom.classList.add('content-bottom')
    contentFlavor.appendChild(contentFlavorHead)
    contentFlavor.appendChild(contentFlavorSubtext)
    contentFlavor.appendChild(contentFlavorBtn)
    contentBottom.appendChild(contentBottomLocation)
    contentBottom.appendChild(contentBottomWorktime)
    contentBody.appendChild(contentFlavor)
    contentBody.appendChild(contentBottom)
    contentBody.classList.remove('notHome')
}