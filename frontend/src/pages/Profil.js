import React from "react";
import { RequireAuth } from "../components/Secure/requireAuth";
import GetProfil from "../components/profil/GetProfil";
import Header from '../components/profil/Header';

const Profil = () => {
    RequireAuth()
    
    return (
        <div className="generalClass">
            <Header/>
            <GetProfil />
        </div>
    )
}

export default Profil;