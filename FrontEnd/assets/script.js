const filters = document.querySelector('.filtres')

// fonction pour créer les 3 boutons
function createButton(title, categoryId) {
    const buttonCategory = document.createElement('button');
    buttonCategory.textContent = title
    buttonCategory.classList.add('buttonFiltre')


    buttonCategory.addEventListener('click',()=> handleFilters(categoryId));

    filters.appendChild(buttonCategory);
}

// fonction pour system de filte
function handleFilters(categoryId) {
  let allWorks = document.querySelectorAll('.work');
  console.log(categoryId);

  allWorks.forEach(oneWork => {
    if (categoryId === "" || oneWork.dataset.categorie === categoryId.toString()) {
      oneWork.style.display = 'block';
    } else {
      oneWork.style.display = 'none';
    }
  });
}


// réccupération des categories pour créer les boutons + création du bouton "tous"
const categorieCollect = fetch("http://localhost:5678/api/categories")
    .then(reponse => reponse.json())
    .then(categories => {
        categories.forEach((category, index) => {
            if (index === 0) { // index = au premier tour de boucle des 3 boutons , permet de créer le bouton "tous"
                createButton('Tous')
            }
            createButton(category.name, category.id);

        });
    })

const imgCollect = fetch("http://localhost:5678/api/works") // méthode fetch qui permet d'interagir avec le backend
    .then(reponse => reponse.json())
    .then(data => {
        data.forEach(element => {

            // créer balises pour accueillir les images du portfolio
            const galerie = document.querySelector('.gallery');//collecter images de .gallery
            const maDiv = document.createElement('div');
            const myImg = document.createElement('img');
            const myTitle = document.createElement('p');


            maDiv.classList.add('work')
            myImg.src = element.imageUrl // la source de l'image sera celle de imageUrl
            myTitle.innerHTML = element.title
            //maDiv.dataset.name = element.category.name  categorieId est une elelement de "element". Injecte des données mais ne sont pas affiché
            maDiv.dataset.categorie = element.categoryId

            galerie.appendChild(maDiv); // on met les div et images créer en html dans le parent galerie
            maDiv.appendChild(myImg);
            maDiv.appendChild(myTitle);

        });
    })


