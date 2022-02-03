import FormSignUp from "../components/FormSignUp";

const HomeSignIn = () => {
    return (
        <div className="home">
            <div className="HEADER">
                <img className="logo" src="./img/logo.png" alt="logo-Groupomania"/>
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
                    <a href="https://www.twitter.com/" className="properties_pic"><img className="properties_pic" src="./img/twitter.png" alt="twitter"/></a>
                    <a href="https://www.facebook.com/" className="properties_pic"><img className="properties_pic" src="./img/facebook.png" alt="facebook"/></a>
                    <a href="https://www.instagram.com/" className="properties_pic"><img className="properties_pic" src="./img/instagram.png" alt="instagram"/></a>
                    <a href="https://www.linkedin.com/" className="properties_pic"><img className="properties_pic" src="./img/linkedin.png" alt="linkedin"/></a>
                </div>   
            </div>
        </div>  
    );
};

export default HomeSignIn;