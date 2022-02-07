import FormSignUp from "../components/formulaire/FormSignUp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const HomeSignIn = () => {
    return (
        <div className="home">
            <div className="HEADER">
                <div className="content"><div className="logo"></div></div>
                <h1 className="titleForm">Groupomania</h1>
            </div>
            <div className="center__form">
                <div className="card__form">
                    <FormSignUp />
                </div>
            </div> 
            <div className="reseauLink">
                <p>Suivre Groupomania</p>
                <div className="properties__reseauLink">
                    <a href="https://www.twitter.com/" className="link_ico"><FontAwesomeIcon icon={faTwitter} className="ico" /></a>
                    <a href="https://www.facebook.com/" className="link_ico"><FontAwesomeIcon icon={faFacebook} className="ico" /></a>
                    <a href="https://www.instagram.com/" className="link_ico"><FontAwesomeIcon icon={faInstagram} className="ico" /></a>
                    <a href="https://www.linkedin.com/" className="link_ico"><FontAwesomeIcon icon={faLinkedin} className="ico" /></a>
                </div>   
            </div>
        </div>  
    );
};

export default HomeSignIn;