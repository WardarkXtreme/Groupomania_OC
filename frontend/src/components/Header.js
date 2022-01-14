import React, {useState} from "react";
import CreateCard from "./CardPublication";


function Header() {
    const [anim, setAnim] = useState(false);
    const [changeBack, setChangeBack] = useState(false);
    const [slideDown, setSlideDown] = useState(false);
    const btnHeader = () => {
        setAnim(!anim)
        setChangeBack(!changeBack)
        setSlideDown(false)
    };
    const btnCreate = () => {
        setAnim(!anim)
        setChangeBack(true)
        setSlideDown(!slideDown)
    };

    return (
        <div className="header">
            <img src="./img/logo.png" alt="logo_image" className="logoHeader"></img>
            <h1 className="titleHeader">Groupomania</h1> 
            <button onClick={btnHeader} className={`btnHeader ${changeBack ? "btnMenuChange" : ""}`}></button>
            <div className={`createPublication ${slideDown ? "createPublicationVisible" : ""}`}>
                <div className="publicationGroupe">
                    <CreateCard />
                </div>
            </div>
            <div className={`menu ${anim ? "menuVisible" : ""}`}>
                <button onClick={btnCreate} className="btn">Créer une publication</button>
                <button className="btn">Voir mon profil</button>
            </div>
        </div>
    )
}

export default Header;