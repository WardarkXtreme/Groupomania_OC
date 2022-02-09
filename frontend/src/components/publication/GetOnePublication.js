import React, {Fragment, useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function DisplayOnePublication(){

    const [onePublication, setOnePublication] = useState([]);
    const [comment, setComment] = useState([]);
    const [like, setLike] = useState();
    const [cache, setCache] = useState();
    
    useEffect(() => {

        const fetchOnePublication = async () => {
            const idServiable = window.location.search.slice(1);
            await axios({
                url :'http://localhost:3000/api/pub/'+idServiable,  
                mode: 'cors'
            }).then((result) => {
                setOnePublication(result.data)
            })
            .catch(err => console.log ({err}))
        };

        const fetchLike = async () => {
            const idServiable = window.location.search.slice(1);
            await axios({
                url :'http://localhost:3000/api/pub/like/'+idServiable,  
                mode: 'cors'
            }).then((result) => {
                result.data.forEach(e => {
                    const idCompare = sessionStorage.getItem('user');
                    if(e.userID == idCompare) {
                        setLike(!like)
                    }
                });
                console.log(result.data)
            })
            .catch(err => console.log ({err}))
        };

        const fetchComment = async () => {
            const idServiable = window.location.search.slice(1);
            await axios({
                url :'http://localhost:3000/api/com/'+idServiable,  
                mode: 'cors'
            }).then(result => {
                setComment(result.data)
                console.log(result)
            })
            .catch(err => console.log(err))
        }

        fetchOnePublication();
        fetchLike();
        fetchComment();
    }, []);
    

    
    const toggle = () => {
        setLike(!like)

        if(like) {

            const idPub = window.location.search.slice(1);
            const userId = sessionStorage.getItem('user')
            const data = {
                like: 0,
                publicationID: idPub 
            }
            axios({
                url :'http://localhost:3000/api/pub/like/'+userId,  
                mode: 'cors',
                method: 'POST',
                data: data
            }).then(res => console.log(res))
            .catch(err => console.log(err))
            window.location.reload()

        }else if (!like){
            const idPub = window.location.search.slice(1);
            const userId = sessionStorage.getItem('user')
            const data = {
                like: 1,
                publicationID: idPub 
            }
            axios({
                url :'http://localhost:3000/api/pub/like/'+userId,  
                mode: 'cors',
                method: 'POST',
                data: data
            }).then(res => console.log(res))
            .catch(err => console.log(err))
            window.location.reload()
        }
    };

    const toggleCom = () => {
        setCache(!cache)
    }

    return (
        <Fragment>
            
            <div className='properties'>
                {onePublication.map(item => (
                    <div className='card' key={item.publicationID}>
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
                        <div className='agenceLike'>  
                            <p id='countLike'>{item.like}</p>
                            <div className={`dislike ${like ? "like" : ""}`}>
                                <FontAwesomeIcon onClick={toggle} icon={faHeart} className="ico"/>
                            </div>
                        </div>    
                        <p className='article'>{item.article}</p>
                        <FontAwesomeIcon onClick={toggleCom} icon={faCommentDots} className="icoComment"/>
                    </div>
                ))}
            </div>
            <div className={`notVisible ${cache ? "groupeComVisible" : ""}`}>
                    {comment.map(com => (
                        <div className='groupeIntCom' key={com.commentID}>
                            <div className='uiLine'></div>
                            <div className='globalCom'>
                                <div className='groupeName'>
                                    <p>{com.firstName}</p>
                                    <p>{com.lastName}</p>
                                </div>
                                <div className='comArticle'>
                                    <p>{com.commentText}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </Fragment>
    );
};

export default DisplayOnePublication;