import axios from "axios";
import Header from "./Header";

function getAllPublication() {
    let url ="http://localhost:3000/api/allPublication";
    axios.get(url)
    .then((dataPublication) => {
        console.log(dataPublication)
        dataPublication.data.forEach(publication => {
            displayPublication(document.getElementById("container"), publication);
        })
    })
    .catch(err => {console.log(err)});
    
};
function displayPublication(container, publication) {

    //------création des contenant html-------//
    const groupe = document.createElement('div')
    const title = document.createElement('p')
    const firstName = document.createElement('p')
    const lastName = document.createElement('p')
    const pseudo = document.createElement('p')
    const publicationPicture = document.createElement('img')
    const article = document.createElement('p')

    //------indication des contenus aux contenants-------//
    groupe.appendChild(title)
    groupe.appendChild(firstName)
    groupe.appendChild(lastName)
    groupe.appendChild(pseudo)
    groupe.appendChild(publicationPicture)
    groupe.appendChild(article)
    container.appendChild(groupe)

    //---------indication sur les informations data à afficher-----//
    groupe.setAttribute("class", "publicationGroupe")
    
    title.innerHTML = publication.title
    title.setAttribute("class", "publicationTitle")
    firstName.innerHTML = publication.firstName
    firstName.setAttribute("class", "publicationFirstName")
    lastName.innerHTML = publication.lastName
    lastName.setAttribute("class", "publicationLastName")
    pseudo.innerHTML = publication.pseudo
    pseudo.setAttribute("class", "publicationPseudo")
    publicationPicture.src = publication.publicationPicture
    publicationPicture.setAttribute("class", "publicationPicture")
    article.innerHTML = publication.article
    article.setAttribute("class", "publicationArticle")
};


function displayAllPublication(){
    getAllPublication();
    return (
        <div className="home">
            <Header />
            <div id="container"></div>
        </div>
    );
};

export default displayAllPublication;