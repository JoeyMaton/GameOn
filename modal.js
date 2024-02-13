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

 // Affiche les données recuperées
 let form = document.querySelector("form");
 
 form.addEventListener("submit", (event) => {
   event.preventDefault();
 
   let balisePrenom = document.getElementById("first");
   let baliseNom = document.getElementById("last");
   const errorFirstName = document.getElementById("error-firstname");
   const errorLastName = document.getElementById("error-lastname");
 
   validateWithMinimumCharacters(balisePrenom.value, errorFirstName, "Le prénom doit contenir 2 caractères au minimum. ");
   validateWithMinimumCharacters(baliseNom.value, errorLastName, "Le nom doit contenir 2 caractères au minimum. ");
   console.log(balisePrenom.value)
   console.log(baliseNom.value);
 
   let baliseEmail = document.getElementById("email");
   const errorEmail = document.getElementById("error-email");
   validateEmail(baliseEmail.value, errorEmail, "L'email n'est pas valide. ")
   console.log(baliseEmail.value);

   let baliseConcours = document.getElementById("quantity");
   const errorConcours = document.getElementById("error-concours")
   validateConcours(baliseConcours.value, errorConcours, "Une valeur numérique doit être saisie. ")
   console.log(baliseConcours.value);

   let ListBtnRadio = document.querySelectorAll("input[type=radio]")
   for (let i = 0; i < ListBtnRadio.length; i++) {
      if (ListBtnRadio[i].checked) {
          console.log(ListBtnRadio[i].value)
      }
   }
   const errorBtnRadio = document.getElementById("error-btnRadio")
   

   let checkbox1 = document.getElementById("checkbox1")
   console.log(checkbox1.checked);

   let checkbox2 = document.getElementById("checkbox2")
   console.log(checkbox2.checked);


 });


 
 function validateWithMinimumCharacters(value, errorElement, errorMessage) {
   if (value.length < 2) {
     errorElement.innerText = errorMessage;
     return true;
   } 
   errorElement.innerText = "";
   return false;
 }

function validateEmail(baliseEmail, errorElement, errorMessage) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z._-]+")
  if (!emailRegExp.test(baliseEmail)) {
    errorElement.innerText = errorMessage;
    return true;
  } 
    errorElement.innerText = "";
    return false;
}

function validateConcours(baliseConcours, errorElement, errorMessage) {
  let concoursRegExp = new RegExp("[0-9]+")
  if (!concoursRegExp.test(baliseConcours)) {
    errorElement.innerText = errorMessage;
    return true;
  } 
    errorElement.innerText = "";
    return false;
}

function validateBtnRadio (ListBtnRadio, errorElement, errorMessage) {

}


function manageForm() {
  try {
  

  } catch (erreur) {
    // gérer l'erreur
  
  }
}
