import FormSignIn from "../components/FormSignIn";

const HomeSignIn = () => {
    return (
        <div className="home">
            <div className="vectorOne"></div>
            <div className="vectorTwo"></div>
            <div className="logo"><img src="./img/logo.png" alt="logo-Groupomania"/></div>
            <h1>Groupomania</h1>
            <FormSignIn />
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