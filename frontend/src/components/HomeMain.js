import axios from "axios";
import { createElement } from "react";

function displayAllPublication() {
    const url ="http://localhost:3000/api/auth/allPublication";
    axios.get(url)
    .then((dataPublication) => {
        dataPublication.data.forEach(publication => {
            console.log(dataPublication.data)
            displayPublication(document.getElementsByClassName("allPublication"), publication);
        })
    })
    .catch(err=> {console.log(err)})
    function displayPublication(container, publication) {
        //------création des contenant html-------//
        const groupe = document.createElement("div")
        const title = document.createElement("p")
        const firstName = document.createElement("p")
        const lastName = document.createElement("p")
        const pseudo = document.createElement("p")
        const publicationPicture = createElement("p")
        const article = document.createElement("p")

        //------indication des contenus aux contenants-------//
        groupe.appendChild(title)
        groupe.appendChild(firstName)
        groupe.appendChild(lastName)
        groupe.appendChild(pseudo)
        groupe.appendChild(publicationPicture)
        groupe.appendChild(article)
        container.appendChild(groupe)

        //---------indication sur les informations data à afficher-----//
        groupe.setAttribute("className", "publicationGroupe")
        
        title.innerHTML = publication.title
        title.setAttribute("className", "publicationTitle")
        firstName.innerHTML = publication.firstName
        firstName.setAttribute("className", "publicationFirstName")
        lastName.innerHTML = publication.lastName
        lastName.setAttribute("className", "publicationLastName")
        pseudo.innerHTML = publication.pseudo
        pseudo.setAttribute("className", "publicationPseudo")
        publicationPicture.innerHTML = publication.publicationPicture
        publicationPicture.setAttribute("className", "publicationPicture")
        article.innerHTML = publication.article
        article.setAttribute("className", "publicationArticle")
    }
    return (
        <div className="allPublication"></div>
    )
}

export default displayAllPublication;