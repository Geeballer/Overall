/************************************
            GET DOM ELEMENTS
************************************/

const menu = document.querySelector('.menu'),
        navbar = document.querySelector('.navbar'),
        form = document.querySelector('.form'),
        firstName = document.querySelector('#firstName'),
        lastName = document.querySelector('#lastName'),
        email = document.querySelector('#email'),
        phone = document.querySelector('#phone'),
        body = document.getElementsByTagName('BODY') [0];

/************************************
                NAVBAR
************************************/

menu.addEventListener('click', () => {

    menu.classList.toggle('active')
    navbar.classList.toggle('menu-open')
    body.classList.toggle('body-overflow')

})

/************************************
                FAQ
************************************/
const servicesFaqs = document.querySelectorAll('.services_faq')

servicesFaqs.forEach((servicesFaq) => {
    servicesFaq.addEventListener('click', () => {
        servicesFaq.classList.toggle('active')
    })
})

/************************************
        FORM VALIDATION
************************************/

form.addEventListener('click', (e) => {
    checkInputs()
    e.preventDefault()
})

function checkInputs(){
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const phoneValue = phone.value.trim()

    if(firstNameValue === ''){
        setErrorFor(firstName)
    }else{
        setSuccessFor(firstName)
    }

    if(lastNameValue === ''){
        setErrorFor(lastName)
    }else{
        setSuccessFor(lastName)
    }

    if(emailValue === ''){
        setErrorFor(email)
    }else if(!isEmail(email)){
        setErrorFor(email)
    }
    else{
        setSuccessFor(email)
    }
    
   function isEmail(email){
        return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    }


 if(phoneValue === '' || phoneValue.length > 11 || isNaN(phoneValue)){
        setErrorFor(phone)
    }else{
        setSuccessFor(phone)
    }
}

function setErrorFor(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form_group error';
}

function setSuccessFor(input){
    const formGroup = input.parentElement;
    formGroup.className = 'form_group success';
}