import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Comment() {

    const [commentText, setCommentText] = useState("");
    const [comment, setComment] = useState([]);
    const [maj, setMaj] = useState([]);
    const [authorizationCom, setAuthorizationCom] = useState(false);

    function handleCommentText (e) {
        setCommentText(e.target.value)
        console.log(commentText)
    }

    const postCom = (e) =>{
        e.preventDefault()
        const userId = sessionStorage.getItem('user');
        const idPub = window.location.search.slice(1);
        const com = {
            publicationID: idPub,
            commentText: commentText
        }
        axios({
            method: 'POST',
            url: "http://localhost:3000/api/com/"+userId,
            mode: 'cors',
            data: com
        })
        .then(res=>{
            setCommentText("")
            setMaj(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
    useEffect(() => {
        const idServiable = window.location.search.slice(1);
        const fetchComment = () => {
            axios({
                url :'http://localhost:3000/api/com/'+idServiable,  
                mode: 'cors'
            }).then((result) => {
                setComment(result.data)
                result.data.forEach(e => {
                    const idCompare = sessionStorage.getItem('user');
                    if(e.userID == idCompare) {
                        setAuthorizationCom(true);
                        console.log(authorizationCom)
                    }else{
                        setAuthorizationCom(false)
                    }
                });
                console.log(result.data)
            })
            .catch(err => console.log ({err}))
        };
        fetchComment();
    }, [maj])
    

    return (
        <div className='propGroupe'>
            <div className="groupeComVisible">
                {comment.map((com) => (
                    <div className='groupeIntCom' key={com.commentID}>
                        <div className='uiLine'></div>
                        <div className='globalCom'>
                            <div className='groupeName'>
                                <img src={com.userPic}/>
                                <p>{com.firstName}</p>
                                <p>{com.lastName}</p>
                            </div>
                            <div className='comArticle'>
                                <p>{com.commentText}</p>
                            </div>
                            {authorizationCom && <FontAwesomeIcon icon={faPen} className="icoComment" />} 
                        </div>
                    </div>
                ))}
            </div>
            <div className='addComment'>
                <div className='ui'></div>
                <form className='formComment'>
                    <p>Ajoutez votre commentaire !</p>
                    <label htmlFor='comment'/>
                    <input type='text' required={true} onChange={handleCommentText} value={commentText} placeholder="votre commentaire..."/>
                    <button className='btnCom' onClick={postCom}>Commenter</button>
                </form>
            </div>
        </div>
    )
};


