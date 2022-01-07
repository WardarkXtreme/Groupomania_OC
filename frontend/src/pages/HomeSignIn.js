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
                    placeholder="Votre password ici"
                    autoComplete="off"/>
                </form>
                <button className="btnConnection">Se Connecter</button>
            </div>
        </div>  
    );
};

export default HomeSignIn;