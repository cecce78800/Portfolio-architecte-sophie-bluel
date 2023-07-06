
// LISTE DES CHOSES NECESSAIRE POUR LA MODAL

// Fonction pour ouvrir la deuxième modale
// Fonction pour réinitialiser l'état des modales
// Appel à l'API
// Fonction de suppression des éléments de la galerie
// Afficher l'image miniature sélectionnée
//F onction ajouter un élément a la gallerie
// icon poubelle <i class="fa-regular fa-trash-can"></i>


// Réccuperation éléments modal1
const myModal = document.getElementById('modal');
const myModalButton = document.getElementById('openModalBtn');
const modal = document.querySelector('.modal-content');
const myCloseButton = document.querySelector('.close-button');

// Fonction ouverture du modal1
function openModal() {
  myModal.style.display = "block";
}

// Fonction fermeture du modal1
function closeModal() {
  myModal.style.display = "none";
}

// Ajout des écouteurs d'événements du modal1
myModalButton.addEventListener("click", openModal);
myCloseButton.addEventListener("click", closeModal);


// Réccuperation des work pour le modal1
const imgCollectModal = fetch("http://localhost:5678/api/works")
  .then(reponse => reponse.json())
  .then(data => {
    data.forEach(element => {

      // créer balises pour accueillir les images du portfolio
      const modalGallery = document.querySelector('.modal-gallery');
      const maDiv = document.createElement('div');
      const myImg = document.createElement('img');
      const myTitle = document.createElement('p');

      myImg.src = element.imageUrl
      myTitle.innerHTML = "éditer"
      maDiv.dataset.categorie = element.categoryId

      maDiv.classList.add('work-modal')

      modalGallery.appendChild(maDiv);
      maDiv.appendChild(myImg);
      maDiv.appendChild(myTitle);
    });
  });



// Ajout du bouton
const addPictureBtn = document.createElement('button');
const modalContent = document.querySelector('.modal-content');
const myModal2 = document.getElementById('modal2');
const myCloseButton2 = document.querySelector('.close-button2');
const myReturnButton = document.querySelector('.return-buton');


addPictureBtn.textContent = 'Ajouter une photo';
addPictureBtn.classList.add('btn-add-picture');
modalContent.appendChild(addPictureBtn);

//function pour ouvrir le modal2 
function openModal2() {
  myModal2.style.display = "block";
  myModal.style.display = 'none';
}

// Fonction fermeture du modal2
function closeModal2 () {
  myModal2.style.display = "none";
}

//Fonction retour au modal1
function returnModal() {
  myModal.style.display = "block";
  myModal2.style.display = 'none';
}

addPictureBtn.addEventListener('click', openModal2);
myCloseButton2.addEventListener('click', closeModal2);
myReturnButton.addEventListener('click', returnModal);
