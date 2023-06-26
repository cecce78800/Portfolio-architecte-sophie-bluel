// Récupération des valeurs des champs
let form = document.getElementById("form-container");


// Ajout d'un event submit sur le container du formulaire
form.addEventListener("submit", function (event) {
    // Empêche la soumission du formulaire (comportement par défaut)
    event.preventDefault();
    console.log(event.target.password.value);


        // Vérification des champs
    if (event.target.password.value === "" || event.target.email.value === "") {
        alert('Erreur dans l’identifiant ou le mot de passe');
    } else {
            fetch("http://localhost:5678/api/users/login", {
               method: "POST",
               headers: { "Content-Type": "application/json", "Origin": "http://localhost:5500/" },
               body: JSON.stringify({
                 email: event.target.email.value,
                 password: event.target.password.value
              }),
            })
            .then((response) => {
                console.log(response)
                if(response.status === 200) {
                    response.json()
                    .then((myBody) => {
                        console.log(myBody)
                    })
                }

            })
          }
    }



    // if(!myUsername.value) {
    //alert('Erreur dans l’identifiant ou le mot de passe');
    //}

    // Validation des champs (vous pouvez ajouter vos propres conditions de validation)

    // Traitement de la connexion
    // Ici, vous pouvez envoyer les données de connexion à un serveur pour vérification ou effectuer des actions côté client

);
