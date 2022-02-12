import React, {Fragment, useState, useEffect} from 'react'; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPen, faFileImport } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function DisplayProfil(){

    const [profil, setProfil] = useState([]);
    const [putPseudo, setPutPseudo] = useState(false);
    const [textPseudo, setTextPseudo] = useState("");
    const [putFile, setPutFile] = useState(false);
    const [putPreviewFile, setPutPreviewFile] = useState();
    const [champVide, setChampVide] = useState(true);
    const [newFile, setNewFile] = useState([])
    const [maj, setMaj] = useState();
    const [admin, setAdmin] = useState();
    
    useEffect(() => {
        const fetchProfil = async () => {
            const id = window.location.search.slice(1);
            const jwt = sessionStorage.getItem('jwt')
            await axios({
                url :'http://localhost:3000/api/auth/user/'+id,
                headers: {
                    'Authorization': 'Bearer ' + jwt
                },  
                mode: 'cors'
            }).then((result) => {
                setProfil(result.data)
                console.log(result.data)
            })
            .catch(err => console.log ({err}))
        };

        const verif = () => {
            const verifAdmin = JSON.parse(sessionStorage.getItem('admin'));
            setAdmin(verifAdmin);
        }

        fetchProfil();
        verif();
    }, [maj])

    const handlePutPic = () => {
        setPutFile(!putFile)
    }
    const handlePutPseudo = () => {
        setPutPseudo(!putPseudo)
    }
    function handlePutTextPseudo (e) {

        setTextPseudo(e.target.value)
        const str = JSON.stringify(textPseudo)
        if(`${str.length}` > 5){
            setChampVide(false)
        }
        else if(`${str.length}` < 5 || `${str.length}` > 10) {
            setChampVide(true)
        }
        console.log(champVide)
    }

    const sendNewFile = (e) => {
        e.preventDefault()
        const userId = window.location.search.slice(1);
        const data = new FormData();
        data.append("image", newFile);
        const jwt = sessionStorage.getItem('jwt')

        axios({
            method: 'PUT',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + jwt
            },
            url: "http://localhost:3000/api/auth/user/"+userId,
            mode: 'cors',
            data: data
        })
        .then(res=>{
            console.log(res)
            setMaj(res)
            setPutFile(false)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const sendPseudo = (e) => {
        e.preventDefault()
        if(!champVide) {

            const userId = window.location.search.slice(1);
            const jwt = sessionStorage.getItem('jwt')
            console.log(textPseudo)
            axios({
                url: "http://localhost:3000/api/auth/user/"+userId,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                },
                mode: 'cors',
                method: 'PUT',
                data: { pseudo: textPseudo }
            })
            .then((res) => { 
                console.log(res)
                setPutPseudo(false)
                setMaj(res)
            })
            .catch((err) => console.log({err}))
        }
    }

    return (
        <Fragment>
            <div className='contentProfil'>
                <div className='card'>
                    {profil.map(item => (
                        <div className='cardProfil' key={item.userID}>
                            <div>
                                {!putFile ?
                                    <div className='putDiv'>
                                        <img src={item.userPic} alt={item.lastName} className="publicationPicture"/>
                                    </div>    
                                    :
                                    <div>
                                        <label htmlFor="file"/>
                                        <input required={true} type="file" name="publicationPic" id="file" accept=".jpg" onChange={event => {
                                            const file = event.target.files[0];
                                            const previewFile = URL.createObjectURL(event.target.files[0]);
                                            setPutPreviewFile(previewFile)
                                            setNewFile(file)
                                        }}/>
                                        <img className="publicationPicture" src={putPreviewFile}/>
                                        <button onClick={sendNewFile}>Modifier</button>
                                    </div>
                                }
                            </div>
                            <div className='PutFile'>
                                {item.userID === JSON.parse(sessionStorage.getItem('user')) && <FontAwesomeIcon onClick={handlePutPic} icon={faFileImport} className='icoFile'/>}
                                {admin === 1 && <FontAwesomeIcon onClick={handlePutPic} icon={faFileImport} className='icoFile'/>}
                            </div>
                            <div className='infoUser'>
                                <div className='alignP'>
                                    <p>nom:</p>
                                    <p className='aqua'>{item.firstName}</p>
                                </div>
                                <div className='alignP'>
                                    <p>prénom:</p>
                                    <p className='aqua'>{item.lastName}</p>
                                </div>
                                    {item.userID === JSON.parse(sessionStorage.getItem('user')) && <FontAwesomeIcon onClick={handlePutPseudo} icon={faPen} className='icoPen'/>}
                                    {admin === 1 && <FontAwesomeIcon onClick={handlePutPseudo} icon={faPen} className='icoPen'/>}
                                {putPseudo ?
                                    <div>
                                        <input className='putContent' type="text" onChange={handlePutTextPseudo} placeholder={item.pseudo}/>
                                        {!champVide && <button className='btnCom' onClick={sendPseudo}>modifier</button>}  
                                    </div>    
                                    :
                                    <div className='putPseudo'>
                                        <p>pseudo:</p>
                                        <p className='aqua'>{item.pseudo}</p>
                                    </div>
                                }
                                <div className='alignP'>
                                    <p>contact:</p>
                                    <p className='aqua'>{item.email}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>        
            </div>
        </Fragment>
    );
};

export default DisplayProfil;