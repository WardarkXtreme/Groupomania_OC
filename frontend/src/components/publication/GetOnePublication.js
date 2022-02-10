import React, {Fragment, useState, useEffect} from 'react';
import Comment from'../comment/Comment';
import Header from '../profil/Header';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function DisplayOnePublication(){

    const [onePublication, setOnePublication] = useState([]);
    const [like, setLike] = useState();
    const [cache, setCache] = useState();
    const [maj, setMaj] = useState([]);
    const [authorizationPub, setAuthorizationPub] = useState(false)
    console.log(authorizationPub)
    
    useEffect(() => {

        const fetchOnePublication = async () => {
            const idServiable = window.location.search.slice(1);
            await axios({
                url :'http://localhost:3000/api/pub/'+idServiable,  
                mode: 'cors'
            }).then((result) => {

                result.data.forEach(e => {
                    const idCompare = JSON.parse(sessionStorage.getItem('user'));
                    if(e.userID === idCompare) {
                        setAuthorizationPub(true);
                        console.log(authorizationPub)
                    }
                });
                setOnePublication(result.data)
            })
            .catch(err => console.log ({err}))
        };

        const fetchLike = () => {
            const idServiable = window.location.search.slice(1);
            axios({
                url :'http://localhost:3000/api/pub/like/'+idServiable,  
                mode: 'cors'
            }).then((result) => {

                result.data.forEach(e => {
                    const idCompare = JSON.parse(sessionStorage.getItem('user'));
                    if(e.userID === idCompare) {
                        setLike(!like);
                    }
                });
                
            })
            .catch(err => console.log ({err}))
        };

        fetchOnePublication();
        fetchLike();
    }, [maj]);   

    const toggle = () => {

        setLike(!like)

        if(like) {
            setLike(!like)
            const idPub = window.location.search.slice(1);
            const userId = sessionStorage.getItem('user')
            let dataLike = {
                like: 0,
                publicationID: idPub 
            }
            axios({
                url :'http://localhost:3000/api/pub/like/'+userId,  
                mode: 'cors',
                method: 'POST',
                data: dataLike
            }).then(res => {
                setMaj(res.data)
            })
            .catch(err => console.log(err))

        }else if (!like){
            setLike(like)
            const idPub = window.location.search.slice(1);
            const userId = sessionStorage.getItem('user')
            let dataLike = {
                like: 1,
                publicationID: idPub 
            }
            axios({
                url :'http://localhost:3000/api/pub/like/'+userId,  
                mode: 'cors',
                method: 'POST',
                data: dataLike
            }).then(res => {
                setMaj(res.data)
            })
            .catch(err => console.log(err))

        }
    };

    const toggleCom = () => {
        setCache(!cache)
    }
    

    return (
        <Fragment>
            <div className='groupePC'>
                <Header/>
                <div className='properties'>
                    {onePublication.map(item => (
                        <div className='outCardard' key={item.publicationID}>
                            <div className='proPic'><img id={item.userID} src={item.userPic} alt={item.title} onClick={event => {
                                event.preventDefault()
                                const userId = event.target.id
                                window.location = "/Home/profil?"+userId;   
                            }}/></div>
                            <div className='card'>
                                <div className='publicationName'>
                                    <div className='propertiesName'>
                                        <p className='publicationFirstName'>{item.firstName}</p>
                                        <p className='publicationLastName'>{item.lastName}</p>
                                    </div>
                                    <div className='propertiesPseudo'>
                                        <p className='publicationPseudo'>{item.pseudo}</p>
                                    </div>
                                </div> 
                                <h2 className='publicationTitle'>{item.title}</h2>
                                <img className='publicationPicture' src={item.publicationPicture} alt={item.title}/>
                                <p className='date'>{item.createdOn}</p>
                                <p className='article'>{item.article}</p>
                                <div className='agencementDown'>
                                    <div className='agenceLike'>  
                                        <div className={`dislike ${like ? "like" : ""}`}>
                                            <FontAwesomeIcon onClick={toggle} icon={faHeart} className="ico"/>
                                        </div>
                                        <p id='countLike'>{item.like}</p>
                                    </div>    
                                    <FontAwesomeIcon onClick={toggleCom} icon={faCommentDots} className="icoComment" />
                                    {authorizationPub && <FontAwesomeIcon onClick={toggleCom} icon={faPen} className="icoComment" />}
                                    {authorizationPub && <FontAwesomeIcon onClick={toggleCom} icon={faTrash} className="icoComment" />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div> 
                <div className={`notVisible ${cache ? "displayCom" : ""}`}>
                    <Comment/>
                </div>
            </div>
        </Fragment>
    );
};

export default DisplayOnePublication;