import React from "react";
import GetPublication from "../components/publication/GetPublication";
import CreatePublication from "../components/publication/CreatePublication"
import { RequireAuth } from "../components/Secure/requireAuth";


const GeneralHome = () => {
    RequireAuth();
    return (
        <div className="generalClass">
            <CreatePublication/>
            <GetPublication/>
        </div>
    )
}

export default GeneralHome;