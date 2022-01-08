import React, { useState } from "react";
import Navigation from "./Navigation";
import Axios from "axios";

function FormSignUp(){

    const url ="http://localhost:3000/api/auth/signup"
    const [data, setData] = useState({
        email: "",
        lastName: "",
        firstName: "",
        password: "",
        pseudo: ""
    });
    function empty(){
        document.getElementById('email').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('firstName').value = '';
        document.getElementById('password').value = '';
        document.getElementById('pseudo').value = '';
    }
    function submit(e) {
        e.preventDefault();
        Axios.post(url,{
            email: data.email,
            lastName: data.lastName,
            firstName: data.firstName,
            password: data.password,
            pseudo: data.pseudo
        })
        .then(res=>{
            empty();
            window.confirm("sometext");
            // window.alert("Félicitation, votre inscription c'est Effectuée avec succés !");
        })
        .catch(error=>{
            console.log(error)
        })
    }
    function handle(e){
        const newdata ={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    };

    return(
        <div className="login">
            <Navigation />
            <form onSubmit={(e)=>submit(e)} className="connectionForm">
                <input onChange={(e)=>handle(e)} value={data.email} required="true" type="mail" id="email" name="email" placeholder="Votre email"/>
                <input onChange={(e)=>handle(e)} value={data.lastName} required="true" type="text" id="lastName" name="lastName" placeholder="Votre prénom"/>
                <input onChange={(e)=>handle(e)} value={data.firstName} required="true" type="text" id="firstName" name="firstName" placeholder="Votre nom"/>
                <input onChange={(e)=>handle(e)} value={data.password} required="true" type="password" id="password" name="password" placeholder="Votre mot de passe"/>
                <input onChange={(e)=>handle(e)} value={data.pseudo} required="true" type="text" id="pseudo" name="pseudo" placeholder="Votre pseudonyme"/>
                <button className="btnConnection">S'inscrire</button>
            </form>
        </div>
    )
}

export default FormSignUp;