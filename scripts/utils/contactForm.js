function displayModal() {
    console.log('je rentre dans la modale')
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// Recupérer form
const form = document.querySelector('form');
const button = document.querySelector('contact_button');
//console.log('form============',form) //test

// On récupère tous les inputs de form
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Listener sur button
form.addEventListener('submit', (e) => {
    // on empêche le submit
    e.preventDefault();

    checkInputs();
    console.log('Message envoyé')
});

function checkInputs() {
    // On supprime les espaces
    const firstNameValue = firstName.value.trim();
    console.log('prenom',firstNameValue)
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    
    if(firstNameValue === '') {
        setErrorFor(firstName, 'Merci de renseigner votre prénom');
    } else {
        setSuccessFor(firstName);
    }

    if(lastNameValue === '') {
        setErrorFor(lastName, 'Merci de renseigner votre nom');
    } else {
        setSuccessFor(lastName);
    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Merci de renseigner votre email');
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email non valide');
    } else {
        setSuccessFor(email)
    }
    
    if(messageValue === '') {
        setErrorFor(message, 'Merci d\'écrire un message');
    } else {
        setSuccessFor(message);
    }
    console.log(firstNameValue, lastNameValue, emailValue, messageValue)
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const displayError = formControl.querySelector( 'p' );
    console.log('p',formControl)
    formControl.className = 'form-control error';
    displayError.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// const setError = (input, message) => {
//     const inputControl = input.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }
    
// const setSuccess = input => {
//     const inputControl = input.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// }
// Si le champs est vide => error
// const validateInputs = () => {
//     const prenomValue = inputPrenom.value.trim();
//     const nomValue = inputNom.value.trim();
//     const emailValue = inputEmail.value.trim();
//     const messageValue = inputMessage.value.trim();

//     if(prenomValue === '') {
//         setError(inputPrenom, 'Merci de renseigner votre prénom')
//     } else {
//         setSuccess(inputPrenom)
//     }

//     if(nomValue === '') {
//         setError(inputNom, 'Merci de renseigner votre nom')
//     } else {
//         setSuccess(inputNom)
//     }
// }

