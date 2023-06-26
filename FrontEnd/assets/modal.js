// Sélectionnez les éléments modal
const modal = document.getElementById("modal");
const closeButton = document.querySelector(".close");
const myButton = document.getElementById("myButton");

  // Ajoutez un écouteur d'événement pour ouvrir la fenêtre modale
myButton.addEventListener("click", openModal);


// Fonction pour afficher la fenêtre modale
function openModal() {
 document.querySelector(".modal").style.display = "block";
  }

  // Fonction pour masquer la fenêtre modale
function closeModal() {
    modal.style.display = "none";
  }

