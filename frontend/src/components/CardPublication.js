import React, { useState } from "react";
import Axios from "axios";

function CreateCard(){

    const url ="http://localhost:3000/api/auth/signup"
    const [publication, setPublication] = useState({
        publicationID: "",
        userID: "",
        title: "",
        publicationPicture: "",
        publicationArticle: "",
        createdOn: ""
    });
    function empty(){
        document.getElementsByClassName('title').value = '';
        document.getElementsByClassName('publicationPicture').value = '';
        document.getElementsByClassName('publicationArticle').value = '';
    }
    function submit(e) {
        let params = (new URL(document.location)).searchParams;
        let myName = params.get('name');
        e.preventDefault();
        Axios.post(url,{
            publicationID: "",
            userID: myName,
            title: publication.title,
            publicationPicture: publication.publicationPicture,
            publicationArticle: publication.publicationArticle,
            createdOn: ""
        })
        .then(res=>{
            window.alert("publication effectué avec succée")
            window.location = "/";
        })
        .catch(error=>{
            console.log(error)
            empty();
        })
    }
    function handle(e){
        const newpublication ={...publication}
        newpublication[e.target.id] = e.target.value
        setPublication(newpublication)
        console.log(newpublication)
    };

    return(
        <div className="post">
            <form onSubmit={(e)=>submit(e)} className="publicationForm">
                <input onChange={(e)=>handle(e)} value={publication.title} required={true} type="text" className="title" name="title" placeholder="Votre titre"/>
                <input onChange={(e)=>handle(e)} value={publication.publicationPicture} required={true} type="text" className="publicationPicture" name="publicationPicture" placeholder="Votre Gif"/>
                <input onChange={(e)=>handle(e)} value={publication.publicationArticle} required={true} type="text" className="publicationArticle" name="publicationArticle" placeholder="Votre article"/>
                <button className="btnSendCard">envoyer</button>
            </form>
        </div>
    )
}

export default CreateCard;