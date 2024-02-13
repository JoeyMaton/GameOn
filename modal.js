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
 
   validateWithMinimumCharacters(balisePrenom.value, errorFirstName, "Prénom pas bon");
   validateWithMinimumCharacters(baliseNom.value, errorLastName, "Nom pas bon");
 
   let baliseEmail = document.getElementById("email");
   console.log(baliseEmail.value);
 });

 
 function validateWithMinimumCharacters(value, errorElement, errorMessage) {
   if (value.length < 2) {
     errorElement.innerText = errorMessage;
     return true;
   }
   errorElement.innerText = "";
   return false;
 };

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} baliseEmail 
 * @throws {Error} 
 */
function validerEmail(baliseEmail) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z._-]+")
  if (!emailRegExp.test(baliseEmail)) {
    throw new Error("L'Email n'est pas valide. ")
  } 
}

function gererFormulaire() {
  try {
    let balisePrenom = document.getElementById("first")
    validerPrenom(balisePrenom)
  
    let baliseNom = document.getElementById("last")
    validerNom(baliseNom)
  
    let baliseEmail = document.getElementById("email")
    validerEmail(baliseEmail)
    afficherMessageErreur("")

  } catch (erreur) {
    // gérer l'erreur
    afficherMessageErreur(erreur.message)
  }
}
