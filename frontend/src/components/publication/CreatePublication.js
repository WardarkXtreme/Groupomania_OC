import React, { useState } from "react";
import Axios from "axios";

function CreateCard(){
    
    const [title, setTitle] = useState();
    const [file, setFile] = useState();
    const [message, setMessage] = useState();
    const [previewFile, setPreviewFile] = useState();
    
    
    let myID = JSON.parse(sessionStorage.getItem('user'));
    console.log(myID)
    const send = event => {
        
        event.preventDefault()
        const data = new FormData();
        data.append("userID", myID);
        data.append("title", title);
        data.append("image", file);
        data.append("article", message);
        
        Axios({
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            url: "http://localhost:3000/api/pub/",
            mode: 'cors',
            data: data
        })
        .then((res) => {  
            console.log('publié')
        })
        .catch((err) => console.log({err}))
    }

    return(
        <div className="createCard">
            <form className="propForm" action="/images" encType="multipart/form-data" method="post">
                <div className="agencement">
                    <label className="titleForm" htmlFor="title">Votre titre</label>
                    <input required={true} type="text" id="title" onChange={event => {
                        const { value } = event.target;
                        setTitle(value)
                    }}/>
                </div>
                <div className="entryFile">
                    <label htmlFor="file"/>
                    <input required={true} type="file" name="publicationPic" id="file" accept=".jpg, .png, .gif" onChange={event => {
                        const file = event.target.files[0];
                        const previewFile = URL.createObjectURL(event.target.files[0]);
                        setPreviewFile(previewFile)
                        setFile(file)
                    }}/>
                    <img className="preview" src={previewFile}/>
                </div>
                <div className="agencement">
                    <label htmlFor="article">Votre message</label>
                    <input required={true} type="text" id="article" onChange={event => {
                        const { value } = event.target;
                        setMessage(value)
                    }}/>
                </div>
                <div className="agencement1">
                    <button className="btnCP" onClick={send}>Publier</button>
                </div>
            </form>
        </div>
    )
}

export default CreateCard;