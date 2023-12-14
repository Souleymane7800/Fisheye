// Récupérer le formulaire et le bouton
const form = document.querySelector('form');
const button = document.querySelector('contact_button');

// Ajouter un écouteur d'événement sur le formulaire
form.addEventListener('click', (e) => {
    console.log('je click sur le btn')
    e.preventDefault(); // Empêcher la soumission du formulaire par défaut

    // Récupérer tous les champs du formulaire
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Vérifier s'il y'a des errreurs
    let isErrors = false;
    
    const displayErrors = document.querySelectorAll('.error');
    displayErrors.forEach(displayError => displayError.parentNode.removeChild(displayError));

    // check le prénom
    if(!firstName.value) {
        const firstNameError = document.createElement('p');
        firstNameError.classList.add('error');
        firstNameError.textContent = `Veuillez entrer un prénom`;
        firstName.parentNode.insertBefore(firstNameError, firstName.nextSibling);
        isErrors = true;
    }

    // check le nom
    if(!lastName.value) {
        const lastNameError = document.createElement('p');
        lastNameError.classList.add('error');
        lastNameError.textContent = `Veuillez entrer un nom`;
        lastName.parentNode.insertBefore(lastNameError, lastName.nextSibling);
        isErrors = true;
    }

    // check l'email
    if(!isEmail(email.value)) {
        const emailError = document.createElement('p');
        emailError.classList.add('error');
        emailError.textContent = `Veuillez entrer un email valide`;
        email.parentNode.insertBefore(emailError, email.nextSibling);
        isErrors = true;
    }

     // check l'message
     if(!message.value) {
        const messageError = document.createElement('p');
        messageError.classList.add('error');
        messageError.classList.add('errorMessage');
        messageError.textContent = `Veuillez entrer un message`;
        message.parentNode.insertBefore(messageError, message.nextSibling);
        isErrors = true;
    }

    if (!isErrors) {
        // Build the alert message
        const validateMessage = `Prénom: ${firstName.value}\nNom: ${lastName.value}\nEmail: ${email.value}\nMessage: ${message.value}`;
        console.log(validateMessage);
    
        closeModal() //ou tout autre code que vous souhaitez exécuter
    }
    // console.clear()

    // closeModal()
});

// Fonction pour vérifier le format de l'email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

let focusableElements = [];

// Fonction pour afficher la modale
function displayModal() {
    console.log('Je rentre dans la modale');
    document.body.setAttribute('data-overlay', true);
    const modal = document.getElementById("contact_modal");
    modal.removeAttribute('aria-hidden');
    modal.style.display = "block";
    // focusableElements[0].focus()
}

// Fonction pour fermer la modale
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.classList.add('aria-hidden', 'true');
}

// * Gestionnaire d'événement pour la navigation au clavier à l'intérieur de la modale
if (!document.getElementById("contact_modal" !== null)) {
     
form.addEventListener("keydown", (event) => {
    const modal = document.getElementById("contact_modal");
    const focusableElements = Array.from(modal.querySelectorAll("input, select, textarea, button"));
    console.log(focusableElements)
    if (event.key === "Escape" || event.key === "Esc") {
        closeModal(event)
    }
    if (event.key === "Tab" && modal !== null) {
        const focusedElement = modal.querySelector(':focus');
        const index = focusableElements.indexOf(focusedElement);

        if (event.shiftKey) {
            // If Shift key is pressed, focus the previous element
            focusableElements[(index - 1 + focusableElements.length) % focusableElements.length].focus();
        } else {
            // If Shift key is not pressed, focus the next element
            focusableElements[(index + 1) % focusableElements.length].focus();
        }

        event.preventDefault(); // Prevent the default Tab key behavior
    }
});
}

  
