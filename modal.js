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
  document.querySelector(".modal-body").style.display = "block";
  document.querySelector(".success").style.display = "none";
  location.reload()
}

 // Displays the recovered data
 let form = document.querySelector("form");
 
 form.addEventListener("submit", (event) => {
   event.preventDefault();
 
   let firstName = document.getElementById("first");
   const firstNameError = document.getElementById("error-firstname");
   const hasFirstNameError = validateWithMinimumCharacters(firstName.value, firstNameError, "Le prénom doit contenir 2 caractères au minimum. ");
   console.log(firstName.value);

   let lastName = document.getElementById("last");
   const lastNameError = document.getElementById("error-lastname");
   const hasLastNameError = validateWithMinimumCharacters(lastName.value, lastNameError, "Le nom doit contenir 2 caractères au minimum. ");
   console.log(lastName.value);
 
   let email = document.getElementById("email");
   const emailError = document.getElementById("error-email");
   const hasEmailError = validateEmail(email.value, emailError, "L'email n'est pas valide. ")
   console.log(email.value);

   let birthDate = document.getElementById("birthdate");
   const birthDateError = document.getElementById("error-birthdate");
   const hasBirthDateError = validateBirthDate(birthDate, birthDateError, "Veuillez entrer une date de naissance valide.")
   console.log(birthDate.value)

   let concours = document.getElementById("quantity");
   const concoursError = document.getElementById("error-concours");
   const hasConcoursError = validateConcours(concours.value, concoursError, "Une valeur numérique compris entre 0 et 100 doit être saisie. ");
   console.log(concours.value);

   let listBtnRadio = document.querySelector("input[name='location']:checked");
   const btnRadioError = document.getElementById("error-btnRadio");
   const hasBtnRadioError = validateBtnRadio(listBtnRadio, btnRadioError, "Un bouton doit être selectionné. ");
   console.log(listBtnRadio.value)

   let checkbox1 = document.getElementById("checkbox1");
   const checkboxError = document.getElementById("error-checkbox");
   const hasCheckboxError = validateCheckbox(checkbox1, checkboxError, "Vous devez accepter les conditions d'utilisation. ");
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
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".success").style.display = "block";
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
