import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const HomeSignIn = () => {
    return (
        <div className="home">
            <div className="vectorOne"></div>
            <div className="vectorTwo"></div>
            <div className="logo"><img src="./img/logo.png" alt="logo-Groupomania"/></div>
            <h1>Groupomania</h1>
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
                    placeholder="Votre mot de passe"
                    autoComplete="off"/>
                    <input
                    type="password"
                    id="comparePassword"
                    name="password"
                    placeholder="Répétez votre mot de passe"
                    autoComplete="off"/>
                    <input
                    type="text"
                    id="pseudo"
                    name="pseudo"
                    placeholder="Votre pseudonyme"
                    autoComplete="off"/>
                </form>
                <button className="btnConnection">S'inscrire</button>
            </div>
            <div className="reseauLink">
                <p>Suivre Groupomania</p>
                <div className="properties__reseauLink">
                    <a href="https://www.twitter.com/"><img className="properties_pic" src="./img/twitter.png" alt="twitter"/></a>
                    <a href="https://www.facebook.com/"><img className="properties_pic" src="./img/facebook.png" alt="facebook"/></a>
                    <a href="https://www.instagram.com/"><img className="properties_pic" src="./img/instagram.png" alt="instagram"/></a>
                    <a href="https://www.linkedin.com/"><img className="properties_pic" src="./img/linkedin.png" alt="linkedin"/></a>
                </div>   
            </div>
        </div>  
    );
};

export default HomeSignIn;