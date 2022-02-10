import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPowerOff, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";


export default function Header(){

    return (
        <>
            <div className='headerHome'>
                <div className="propertiesHeader">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} className="icoReturn" title="déconnexion" onClick={() => {
                        window.location = '/home'
                    }}/>
                    <div className="propertiesInHeader">
                        <img src='/img/logo.png' alt="logo" className="headerLogo"/>
                        <h1 className="headerTitle">Groupomania</h1>
                    </div>
                    <div className="propertiesIcoOff">
                        <FontAwesomeIcon icon={faPowerOff} className="icoPower" title="déconnexion" onClick={() => {
                            sessionStorage.clear()
                            window.location = '/'
                        }}/>
                    </div>
                </div>
            </div>
        </>
    );
};

