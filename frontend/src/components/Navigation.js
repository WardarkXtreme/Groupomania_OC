import React from 'react'
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink className="signin" exact="true" to="/">
                Connexion
            </NavLink>
            <NavLink className="/signup" exact="true" to="/Signup">
                Inscription
            </NavLink>
        </div>
    );
};

export default Navigation;