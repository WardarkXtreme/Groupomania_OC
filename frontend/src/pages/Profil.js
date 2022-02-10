import React from "react";
import { RequireAuth } from "../components/Secure/requireAuth";
import GetProfil from "../components/profil/GetProfil"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAngleDown, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Profil = () => {
    RequireAuth()
    
    return (
        <>
            <GetProfil />
        </>
    )
}

export default Profil;