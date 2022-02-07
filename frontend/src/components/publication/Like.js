import React, { useState } from "react";
import Axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Like(){
    const myID = sessionStorage.getItem('user')
    const [like, setLike] = useState();
    
    const toggle = () => {
        setLike(!like)
        if(like) {
            console.log(0)
        }else if (!like){
            console.log(1)
        }
    };


    return(
        <div className={`dislike ${like ? "like" : ""}`}>
            <FontAwesomeIcon onClick={toggle} icon={faHeart} className="ico"/>
        </div>
    )
}

export default Like;