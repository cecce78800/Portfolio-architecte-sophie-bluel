// Récupération des valeurs des champs
let form = document.getElementById("form-container");

// Ajout balise p pour les erreurs
let paragraph = document.createElement("p");
paragraph.setAttribute("id", "errorParagraph");
form.appendChild(paragraph);

// Ajout d'un event submit sur le container du formulaire
form.addEventListener("submit", function (event) {
    // Empêche la soumission du formulaire (comportement par défaut)
    event.preventDefault();
    console.log(event.target.password.value);

    // Vérification des champs
    if (event.target.password.value === "" || event.target.email.value === "") {
        alert('Erreur dans l’identifiant ou le mot de passe');
    } else {
        try {
            fetch("http://localhost:5678/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Origin": "http://localhost:5500/" },
                body: JSON.stringify({
                    email: event.target.email.value,
                    password: event.target.password.value
                }),
            })
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        response.json()
                            .then((myBody) => {
                                localStorage.setItem("token", myBody.token);
                                console.log(myBody);
                                window.location.href = "http://localhost:5500/";

                            });
                    } else if (response.status === 401) {
                        paragraph.innerHTML = "Erreur de mot de passe";
                        alert("hahaha");
                    } else if (response.status === 404) {
                        paragraph.innerHTML = "Erreur d’identifiant";
                        alert("hihihi");
                    } else {
                        paragraph.innerHTML = "Erreur inconnue";
                    }
                })
        } catch (error) {
            paragraph.innerHTML = "Erreur lors de la requête";
        };
    }
});

localStorage.setItem("token", "mon-token");

const url = "http://localhost:5678/api/users/login";
const headers = {};

fetch(url, {
    headers: headers
})
    .then((response) => {
        // Traiter la réponse
    })
    .catch((error) => {
        // Gérer les erreurs
    });

// Suppression du token
localStorage.removeItem("token");
