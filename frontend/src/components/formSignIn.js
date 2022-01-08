import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Axios from "axios";

function postForm(){
    const url =""
    const [data, setData] = useState({
        
    })
    return(
        <div className="login">
            <Navigation />
            <form className="connectionForm">
                <input
                type="mail"
                id="email"
                name="email"
                placeholder="Votre email ici"
                autoComplete="off"/>
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Votre password ici"
                autoComplete="off"/>
                <button className="btnInscription">Se Connecter</button>
            </form>
        </div>
    )
}

export default postForm;