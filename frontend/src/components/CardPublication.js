import React, { useState } from "react";
import Axios from "axios";

function CreateCard(){
    let params = (new URL(document.location)).searchParams;
    let myID = params.get('id');

    const url ="http://localhost:3000/api/auth/createPublication"
    const [data, setData] = useState({
        userID: "",
        title: "",
        publicationPicture: "",
        article: ""
    });
    function empty(){
        document.getElementsByClassName('title').value = '';
        document.getElementsByClassName('publicationPicture').value = '';
        document.getElementsByClassName('article').value = '';
    }
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            userID: myID,
            title: data.title,
            publicationPicture: data.publicationPicture,
            article: data.article           
        })
        .then(res=>{
            window.alert("publication effectué avec succée")
            empty()
        })
        .catch(error=>{
            console.log(error)
            empty();
        })
    }
    function handle(e){
        const newdata ={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    };

    return(
        <div className="post">
            <form onSubmit={(e)=>submit(e)} className="publicationForm">
                <input onChange={(e)=>handle(e)} value={data.title} required={true} type="text" id="title" name="title" placeholder="Votre titre"/>
                <input onChange={(e)=>handle(e)} value={data.publicationPicture} required={true} type="URL" id="publicationPicture" name="publicationPicture" placeholder="Votre https://gif.exemple"/>
                <img id="previewPic" onChange={(e)=>handle(e)} src={data.publicationPicture}></img>
                <input onChange={(e)=>handle(e)} value={data.pdublicationArticle} required={true} type="textarea" id="article" name="article" placeholder="Votre article"/>
                <button className="btnSendCard">envoyer</button>
            </form>
        </div>
    )
}

export default CreateCard;