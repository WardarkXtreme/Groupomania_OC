import React from 'react'
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink className="signin" exact to="/">
                Signin
            </NavLink>
            <NavLink className="/signup" exact to="Signup">
                Signup
            </NavLink>
        </div>
    );
};

export default Navigation;