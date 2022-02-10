import React from "react";
import GetPublication from "../components/publication/GetPublication";
import CreatePublication from "../components/publication/CreatePublication"
import { RequireAuth } from "../components/Secure/requireAuth";
import { useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleDown, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const GeneralHome = () => {
    RequireAuth();
    const [turn, setTurn] = useState();
    const [cache, setCache] = useState();
    const [dysplayCreatePub, setDysplayCreatePub] = useState();

    const toggleIco = () => {
        setTurn(!turn)
        setCache(!cache)
    }
    const toggleCreatePub = () => {
        setCache(!cache)
        setDysplayCreatePub(!dysplayCreatePub)
    }
    const editProfil = () => {
        const id = sessionStorage.getItem('user')
        window.location = "/home/profil?"+id
    }
    return (
        <div className="generalClass">
            <div className='headerHome'>
                <div className="propertiesHeader">
                    <div className="propertiesInHeader">
                        <img src='/img/logo.png' alt="logo" className="headerLogo"/>
                        <h1 className="headerTitle">Groupomania</h1>
                    </div>
                    <div className="propertiesIcoOff">
                        <FontAwesomeIcon icon={faPowerOff} className="icoPower" title="déconnexion" onClick={() => {
                            sessionStorage.clear()
                            window.location = '/'
                        }} />
                    </div>
                </div>
            </div>
            <div className="propertiesContent">
                <div className="propertiesIcoDown">
                    <div className={`notVisible ${cache ? "menu" : ""}`}>
                        <ul className="ulNav">
                            <li onClick={toggleCreatePub} className="liNav">Créer une publication</li>
                            <li onClick={editProfil} className="liNav">Voir mon profil</li>
                        </ul>
                    </div>
                    <div className="contentIcoDown">
                        <FontAwesomeIcon onClick={toggleIco} icon={faAngleDown} className={`icodown ${turn ? "turn" : ""}`}/>
                    </div>
                </div>
            </div>
            <div className={`notVisible ${dysplayCreatePub ? "contentCreate" : ""}`}>
                <CreatePublication/>
            </div>
            <GetPublication/>
        </div>
    )
}

export default GeneralHome;