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
   const errorFirstName = document.getElementById("error-firstname");
   validateWithMinimumCharacters(firstName.value, errorFirstName, "Le prénom doit contenir 2 caractères au minimum. ");
   console.log(firstName.value);

   let lastName = document.getElementById("last");
   const errorLastName = document.getElementById("error-lastname");
   validateWithMinimumCharacters(lastName.value, errorLastName, "Le nom doit contenir 2 caractères au minimum. ");
   console.log(lastName.value);
 
   let Email = document.getElementById("email");
   const errorEmail = document.getElementById("error-email");
   validateEmail(Email.value, errorEmail, "L'email n'est pas valide. ")
   console.log(Email.value);

   let BirthDate = document.getElementById("birthdate");
   const errorBirthDate = document.getElementById("error-birthdate");
   validateBirthDate(BirthDate, errorBirthDate, "Veuillez entrer une date de naissance valide.")
   console.log(BirthDate.value)

   let Concours = document.getElementById("quantity");
   const errorConcours = document.getElementById("error-concours");
   validateConcours(Concours.value, errorConcours, "Une valeur numérique doit être saisie. ");
   console.log(Concours.value);

   let ListBtnRadio = document.querySelectorAll("input[type=radio]")
   const errorBtnRadio = document.getElementById("error-btnRadio")
   validateBtnRadio(ListBtnRadio,errorBtnRadio, "Un bouton doit être selectionné. ")
  
   

   let checkbox1 = document.getElementById("checkbox1")
   const errorCheckbox = document.getElementById("error-checkbox")
   validateCheckbox(checkbox1, errorCheckbox, "Vous devez accepter les conditions d'utilisation. ")
   console.log(checkbox1.checked);

   let checkbox2 = document.getElementById("checkbox2")
   console.log(checkbox2.checked);
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

function validateEmail(Email, errorElement, errorMessage) {
  let emailRegExp = new RegExp("[a-z0-9._-]@+[a-z0-9._-]+\\.[a-z._-]+")
  if (!emailRegExp.test(Email)) {
    errorElement.innerText = errorMessage;
    return true;
  } 
    errorElement.innerText = "";
    return false;
}

function validateBirthDate(BirthDate, errorElement, errorMessage) {
  if (BirthDate.value === "") {
    errorElement.innerText = errorMessage;
    return true;
  } 
    errorElement.innerText = "";
    return false;
}
 

function validateConcours(Concours, errorElement, errorMessage) {
  let concoursRegExp = new RegExp("[0-9]+")
  if (!concoursRegExp.test(Concours)) {
    errorElement.innerText = errorMessage;
    return true;
  } 
    errorElement.innerText = "";
    return false;
}

function validateBtnRadio (ListBtnRadio, errorElement, errorMessage) {
  for (let i = 0; i < ListBtnRadio.length; i++) {
  if (!ListBtnRadio[i].checked) {
    errorElement.innerText = errorMessage;
    return true;
  } 
    errorElement.innerText = "";
    return false;
  }
}

function validateCheckbox (checkbox1, errorElement, errorMessage) {
  if (!checkbox1.checked) {
    errorElement.innerText = errorMessage;
    return true;
  } 
    errorElement.innerText = "";
    return false;
}

// Success message if everything is validated
function validateForm() {
  
}
