import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Comment() {

    const [commentTextPut, setCommentTextPut] = useState("");
    const [commentText, setCommentText] = useState("");
    const [comment, setComment] = useState([]);
    const [verifId, setVerifId] = useState();
    const [putComment, setPutComment] = useState(false);
    const [maj, setMaj] = useState([]);
    const [champVide, setChampVide] = useState(true);
    const [champVidePut, setChampVidePut] = useState(true);



    function handleCommentText (e) {

        setCommentText(e.target.value)
        const str = JSON.stringify(commentText)
        if(`${str.length}` > 4){
            setChampVide(false)
        }
        else if(`${str.length}` < 4) {
            setChampVide(true)
        }
        console.log(champVide)
    }
    function handlePutCommentText (e) {

        setCommentTextPut(e.target.value)
        const str = JSON.stringify(commentTextPut)
        if(`${str.length}` > 4){
            setChampVidePut(false)
        }
        else if(`${str.length}` < 4) {
            setChampVidePut(true)
        }
        console.log(champVidePut)
    }
    
    const postCom = (e) =>{
        e.preventDefault()
        if (!champVide){
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
    }
    
    const modify = (e) => {
        setPutComment(!putComment)
        setVerifId(JSON.parse(e.currentTarget.id))
    }

    const putCom = (e) => {
        e.preventDefault()
        
        if (!champVidePut){
  
            axios({
                method: 'PUT',
                url: "http://localhost:3000/api/com/"+verifId,
                mode: 'cors',
                data: {commentText: commentTextPut}
            })
            .then(res=>{
                setCommentTextPut("")
                setPutComment(true)
                setMaj(res.data)
            })
            .catch(error=>{
                console.log(error)
            })  
        }
    }
    
    const delCom = (e)=> {
        const commentId = e.currentTarget.id

        axios({
            method: 'DELETE',
            url: "http://localhost:3000/api/com/"+commentId,
            mode: 'cors'
        })
        .then(res=>{
            setMaj(res)
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
                        <div className='globalCom' id={com.userID}>
                            <div className='groupeName'>
                                <img src={com.userPic} alt={com.lastName}/>
                                <p>{com.firstName}</p>
                                <p>{com.lastName}</p>
                            </div>
                            <div className='comArticle'>
                                {com.commentID === verifId && !putComment ?
                                    <div>
                                        <input type="text" onChange={handlePutCommentText} placeholder={com.commentText}/>
                                        {!champVidePut && <button className='btnCom' onClick={putCom}>modifier</button>}  
                                    </div>    
                                    :
                                    <p>{com.commentText}</p>
                                }
                                
                            </div>
                            <div id={com.commentID} className='authIco'>
                                {com.userID === JSON.parse(sessionStorage.getItem('user')) && <FontAwesomeIcon onClick={modify} icon={faPen} id={com.commentID} className='icoPen'/>} 
                                {com.userID === JSON.parse(sessionStorage.getItem('user')) && <FontAwesomeIcon onClick={delCom} icon={faTrash} id={com.commentID} className="icoTrash"/>} 
                            </div>   
                        </div>
                    </div>
                ))}
            </div>
            <div className='addComment'>
                <form className='formComment'>
                    <p>Ajoutez votre commentaire !</p>
                    <label htmlFor='text'/>
                    <input type='text' required={true} onChange={handleCommentText} value={commentText} placeholder="votre commentaire..."/>
                    {!champVide && <button className='btnCom' onClick={postCom}>Commenter</button>}
                </form>
            </div>
        </div>
    )
};


