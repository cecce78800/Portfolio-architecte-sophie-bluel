// création élément html pour les boutons
const myButtonContainer = document.createElement('div'); // créer div pour contenir les boutons
const container = document.createElement('div'); // créer div container
const myButton = document.createElement('button'); // créer bouton

container.classList.add('myButtonContainer'); // on ajoute container dans mybuttoncontainer
container.appendChild(myButton); // on indique que container est le parent de mybutton
document.querySelector('.myButtonContainer'); // 

const filters = document.querySelector('.filtres')

function createButton(category) {
    const buttonCategory = document.createElement('button');
    buttonCategory.textContent = category
    filters.appendChild(buttonCategory);
    //
}

const categorieCollect = fetch("http://localhost:5678/api/categories")
    .then(reponse => reponse.json())
    .then(categories => {
        categories.forEach((category, index) => {
            if(index === 0) { // index = au premier tour de boucle donc au 3 boutons , pour créer le bouton "tous"
                createButton('Tous')
            }
        createButton(category.name)
        })
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

            myImg.src = element.imageUrl // la source de l'image sera celle de imageUrl
            myTitle.innerHTML = element.title

            galerie.appendChild(maDiv); // on met les div et images créer en html dans le parent galerie
            maDiv.appendChild(myImg);
            maDiv.appendChild(myTitle);

            maDiv.dataset.categorie = element.categoryId // categorieId est une elelement de "element". Injecte des données mais ne sont pas affiché
        });
    })


//if (element.categoryId == 3) {
  //  maDiv.classList.add('none')
//}

//object.addEventListener('click', displayObject(data)) // event au clique sur 'objet'

//function displayObject(data) {
  //  console.log(data);
//}





// dans la fonction: ajouer une 










