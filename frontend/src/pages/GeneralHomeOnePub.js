import React from "react";
import Header from '../components/profil/Header';
import GetOnePublication from "../components/publication/GetOnePublication";
import { RequireAuth } from "../components/Secure/requireAuth";


const GeneralHomeOnePub = () => {
    RequireAuth();
    return (
        <div className="generalClass">
            <Header/>
            <GetOnePublication/>
        </div>
    )
}

export default GeneralHomeOnePub;