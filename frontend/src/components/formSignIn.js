import React, { useState } from "react";
import Navigation from "./Navigation";
import Axios from "axios";

function FormSignIn() {

    const url = "http://localhost:3000/api/auth/login"
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            email: data.email,
            password: data.password,
        })
        .then(res => {
            // console.log(res)
            window.location = "/GeneralHome"+"?id="+res.data.userID+"?name="+res.data.lastName;
            window.confirm("connecté");
        })
        .catch(error => {
            window.alert(error);
        })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    };

    return (
        <div className="login">
            <Navigation />
            <form onSubmit={(e) => submit(e)} className="connectionForm">
                <input onChange={(e) => handle(e)} value={data.email} required={true} type="mail" id="email" name="email" placeholder="Votre email" />
                <input onChange={(e) => handle(e)} value={data.password} required={true} type="password" id="password" name="password" placeholder="Votre mot de passe" />
                <button className="btnInscription">Se Connecter</button>
            </form>
        </div>
    )
}

export default FormSignIn;