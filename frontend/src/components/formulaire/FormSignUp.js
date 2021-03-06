import React, { useState } from "react";
import Navigation from "./Navigation";
import Axios from "axios";

function FormSignUp(){
    
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [lastName, setlastName] = useState("");
    const [firstName, setfirstName] = useState("");
    const [pseudo, setpseudo] = useState("");
    const [file, setFile] = useState();
    const [previewFile, setPreviewFile] = useState();
    
    const [messageMail, setMessageMail] = useState("");
    const [messagePass, setMessagePass] = useState("");
    const [messageLastName, setMessageLastName] = useState("");
    const [messageFirstName, setMessageFirstName] = useState("");
    const [messagePseudo, setMessagePseudo] = useState("");

    const regExMail = /^(([a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}))$/;
    const regExPassword = /^(([a-zA-Z0-9]{10,20}))$/;
    const regExLastName = /^(([a-zA-Z-]{3,20}))$/;
    const regExFirstName = /^(([a-zA-Z-]{3,20}))$/;
    const regExPseudo = /^(([a-zA-Z0-9._-]{3,15}))$/;
    
    const emailValidation = () => {
        if(regExMail.test(email)) {
            setMessageMail("email valide")
            document.getElementById('messageMail').style.color = 'rgb(0, 250, 72)'
        }else if (!regExMail.test(email) && email !== "") {
            setMessageMail("Email non valide");
            document.getElementById('messageMail').style.color = 'rgb(151, 16, 16)'
        } else {
            setMessageMail("");
        }
    }
    const passwordValidation = () => {
        if(regExPassword.test(password)) {
            setMessagePass("mot de passe valide")
            document.getElementById('messagePass').style.color = 'rgb(0, 250, 72)'
        }else if (!regExPassword.test(password) && password !== "") {
            setMessagePass("mot de passe non valide");
            document.getElementById('messagePass').style.color = 'rgb(151, 16, 16)'
        } else {
            setMessagePass("");
        }
    }
    const lastNameValidation = () => {
        if(regExLastName.test(lastName)) {
            setMessageLastName("valide")
            document.getElementById('messageLastName').style.color = 'rgb(0, 250, 72)'
        }else if (!regExLastName.test(lastName) && lastName !== "") {
            setMessageLastName("Pr??nom non valide");
            document.getElementById('messageLastName').style.color = 'rgb(151, 16, 16)'
        } else {
            setMessageLastName("");
        }
    }
    const firstNameValidation = () => {
        if(regExFirstName.test(firstName)) {
            setMessageFirstName("valide")
            document.getElementById('messageFirstName').style.color = 'rgb(0, 250, 72)'
        }else if (!regExFirstName.test(firstName) && firstName !== "") {
            setMessageFirstName("Nom non valide");
            document.getElementById('messageFirstName').style.color = 'rgb(151, 16, 16)'
        } else {
            setMessageFirstName("");
        }
    }
    const pseudoValidation = () => {
        if(regExPseudo.test(pseudo)) {
            setMessagePseudo("valide")
            document.getElementById('messagePseudo').style.color = 'rgb(0, 250, 72)'
        }else if (!regExPseudo.test(pseudo) && pseudo !== "") {
            setMessagePseudo("Pseudo non valide");
            document.getElementById('messagePseudo').style.color = 'rgb(151, 16, 16)'
        } else {
            setMessagePseudo("");
        }
    }

    function handleEmail (e) {
        emailValidation()
        setEmail(e.target.value)
    };
    function handlePassword (e) {
        passwordValidation()
        setpassword(e.target.value)
    };
    function handleLastName (e) {
        lastNameValidation()
        setlastName(e.target.value)
    };
    function handleFirstName (e) {
        firstNameValidation()
        setfirstName(e.target.value)
    };
    function handlePseudo (e) {
        pseudoValidation()
        setpseudo(e.target.value)
    };

    function submit(e) {
        e.preventDefault();
        if (!regExMail.test(email) ||
            !regExPassword.test(password) ||
            !regExLastName.test(lastName) ||
            !regExFirstName.test(firstName) ||
            !regExPseudo.test(pseudo)) {
            return console.log("error");
        }
        const data = new FormData();
        data.append("email", email);
        data.append("password", password);
        data.append("lastName", lastName);
        data.append("firstName", firstName);
        data.append("pseudo", pseudo);
        data.append("image", file);

        Axios({
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            url: "http://localhost:3000/api/auth/signup/",
            mode: 'cors',
            data: data
        })
        .then(res=>{
            window.alert("Inscription r??alis?? avec succ??s, veuillez vous connecter")
            window.location = "/";
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return(
        <div className="Form">
            <Navigation />
            <div className="pic"><img src={previewFile}/></div>
            <form onSubmit={(e)=>submit(e)} className="connectionForm">
                <label htmlFor="file"/>
                <input required={true} type="file" name="userPic" id="file" accept=".jpg, .png" onChange={event => {
                    const file = event.target.files[0];
                    const previewFile = URL.createObjectURL(event.target.files[0]);
                    setPreviewFile(previewFile)
                    setFile(file)
                }}/>
                <p id="messageMail">{messageMail}</p>
                <input onChange={handleEmail} value={email} required={true} type="mail" id="email" name="email" placeholder="Votre email"/>
                <p id="messagePass">{messagePass}</p>
                <input onChange={handlePassword} value={password} required={true} type="password" id="password" name="password" placeholder="Votre mot de passe"/>
                <p id="messageLastName">{messageLastName}</p>
                <input onChange={handleLastName} value={lastName} required={true} type="text" id="lastName" name="lastName" placeholder="Votre pr??nom"/>
                <p id="messageFirstName">{messageFirstName}</p>
                <input onChange={handleFirstName} value={firstName} required={true} type="text" id="firstName" name="firstName" placeholder="Votre nom"/>
                <p id="messagePseudo">{messagePseudo}</p>
                <input onChange={handlePseudo} value={pseudo} required={true} type="text" id="pseudo" name="pseudo" placeholder="Votre pseudonyme"/>
                <button className="btnForm">S'inscrire</button>
            </form>
        </div>
    )
}

export default FormSignUp;