import React from "react";
import GetOnePublication from "../components/publication/GetOnePublication";
import { RequireAuth } from "../components/Secure/requireAuth";


const GeneralHomeOnePub = () => {
    RequireAuth();
    return (
        <div className="generalClass">
            <GetOnePublication/>
        </div>
    )
}

export default GeneralHomeOnePub;