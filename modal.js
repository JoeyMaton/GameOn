function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Retrieve data from the “X” button
let closeBtn = document.querySelector(".close")
closeBtn.addEventListener("click", closeModal);

// close modal event
function closeModal() {
  modalbg.style.display = "none";
}

 // Displays the recovered data
 let form = document.querySelector("form");
 
 form.addEventListener("submit", (event) => {
   event.preventDefault();
 
   let firstName = document.getElementById("first");
   const hasFirstNameError = document.getElementById("error-firstname");
   validateWithMinimumCharacters(firstName.value, hasFirstNameError, "Le prénom doit contenir 2 caractères au minimum. ");
   console.log(firstName.value);

   let lastName = document.getElementById("last");
   const hasLastNameError = document.getElementById("error-lastname");
   validateWithMinimumCharacters(lastName.value, hasLastNameError, "Le nom doit contenir 2 caractères au minimum. ");
   console.log(lastName.value);
 
   let email = document.getElementById("email");
   const hasEmailError = document.getElementById("error-email");
   validateEmail(email.value, hasEmailError, "L'email n'est pas valide. ")
   console.log(email.value);

   let birthDate = document.getElementById("birthdate");
   const hasBirthDateError = document.getElementById("error-birthdate");
   validateBirthDate(birthDate, hasBirthDateError, "Veuillez entrer une date de naissance valide.")
   console.log(birthDate.value)

   let concours = document.getElementById("quantity");
   const hasConcoursError = document.getElementById("error-concours");
   validateConcours(concours.value, hasConcoursError, "Une valeur numérique compris entre 0 et 100 doit être saisie. ");
   console.log(concours.value);

   let listBtnRadio = document.querySelector("input[name='location']:checked");
   const hasBtnRadioError = document.getElementById("error-btnRadio");
   validateBtnRadio(listBtnRadio, hasBtnRadioError, "Un bouton doit être selectionné. ");
   console.log(listBtnRadio.value)
  
   

   let checkbox1 = document.getElementById("checkbox1");
   const hasCheckboxError = document.getElementById("error-checkbox");
   validateCheckbox(checkbox1, hasCheckboxError, "Vous devez accepter les conditions d'utilisation. ");
   console.log(checkbox1.checked);

// All return false
if (
  !hasFirstNameError &&
  !hasLastNameError &&
  !hasEmailError &&
  !hasBirthDateError &&
  !hasConcoursError &&
  !hasBtnRadioError &&
  !hasCheckboxError
)
  {
    const modalContent = document.querySelector(".modal-body");
    modalContent.innerHTML = `<h1>Merci ! Votre réservation a été reçue.</h1>`;
  }
 });


// Form validation
function validateWithMinimumCharacters(value, errorElement, errorMessage) {
  if (value.length < 2) {
    errorElement.innerText = errorMessage;
    return true;
  } 
  errorElement.innerText = "";
  return false;
}

function validateEmail(email, errorElement, errorMessage) {
  let emailRegExp = new RegExp("[a-z0-9._-]@+[a-z0-9._-]+\\.[a-z._-]+")
  if (!emailRegExp.test(email)) {
    errorElement.innerText = errorMessage;
    return true;
  } 
    errorElement.innerText = "";
    return false;
}

function validateBirthDate(birthDate, errorElement, errorMessage) {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 80);
   
  if (new Date(birthDate.value).getTime() < today.getTime() || birthDate.value === "") {
    errorElement.innerText = errorMessage;
    return true;
  }
    errorElement.innerText = "";
    return false;
}
 

function validateConcours(concours, errorElement, errorMessage) {
  let concoursRegExp = new RegExp("^[0-9]{1,2}$")
  if (!concoursRegExp.test(concours)) {
    errorElement.innerText = errorMessage;
    return true;
  }
    errorElement.innerText = "";
    return false;
}

function validateBtnRadio (listBtnRadio, errorElement, errorMessage) {
if (listBtnRadio === null) {
    errorElement.innerText = errorMessage;
    return true;
  }
   errorElement.innerText = "";
    return false;
}

function validateCheckbox (checkbox1, errorElement, errorMessage) {
  if (!checkbox1.checked) {
    errorElement.innerText = errorMessage;
    return true;
  } 
  errorElement.innerText = "";
  return false;
}
