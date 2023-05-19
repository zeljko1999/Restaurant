export default function contact (contentBody) { 
    const contactTitle = document.createElement('h2')
    const contactForm = document.createElement('form')
    const nameInput = document.createElement('input')
    const nameInputLabel = document.createElement('label')
    const mailInput = document.createElement('input')
    const mailInputLabel = document.createElement('label')
    const message = document.createElement('textarea')
    const messageLabel = document.createElement('label')
    const submitBtn = document.createElement('button')
    submitBtn.textContent = 'Send Message'
    submitBtn.type = 'submit'
    submitBtn.classList.add('form-submitBtn')
    nameInput.type = 'text'
    nameInput.name = 'name'
    mailInput.type = 'email'
    mailInput.name = 'userEmail'
    nameInputLabel.for = 'name'
    nameInputLabel.textContent = 'Full Name: '
    mailInputLabel.for = 'userEmail'
    mailInputLabel.textContent = 'Email: '
    messageLabel.textContent = 'Message: '
    messageLabel.for = 'message'
    message.name = 'message'
    contactTitle.classList.add('contact-title')
    contactTitle.textContent = 'Contact Us'
    contactForm.classList.add('contact-form')
    contactForm.appendChild(nameInputLabel)
    contactForm.appendChild(nameInput)
    contactForm.appendChild(mailInputLabel)
    contactForm.appendChild(mailInput)
    contactForm.appendChild(messageLabel)
    contactForm.appendChild(message)
    contactForm.appendChild(submitBtn)
    contentBody.appendChild(contactTitle)
    contentBody.appendChild(contactForm)
    contentBody.classList.add('notHome')
}