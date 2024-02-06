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
let form = document.querySelector("form")

form.addEventListener("submit", () => {
  event.preventDefault()

  let balisePrenom = document.getElementById("first")
  console.log(balisePrenom.value)

  let baliseNom = document.getElementById("last")
  console.log(baliseNom.value)

  let baliseEmail = document.getElementById("email")
  console.log(baliseEmail.value)
})

/**
 * Cette fonction prend un prenom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} balisePrenom 
 * @throws {Error} 
 */
function validerPrenom(balisePrenom){
  if (balisePrenom.length < 2) {
    throw new Error("Le prénom est trop court. ")
  }
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} baliseNom
 * @throws {Error} 
 */
function validerNom(baliseNom){
  if (baliseNom.length < 2) {
    throw new Error("Le nom est trop court. ")
  }
}

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


function afficherMessageErreur(message) {

    let spanErreurMessage = document.getElementById("erreurMessage")

    if (!spanErreurMessage) {
        let popup = document.querySelector(".text-control")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"
        popup.append(spanErreurMessage)
    }
   
    spanErreurMessage.innerText = message

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
