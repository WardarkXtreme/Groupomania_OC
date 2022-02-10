import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";

function DisplayAllPublication(){

    const [publication, setPublication] = useState([]);
    const [maj, setMaj] = useState();
    
    useEffect(() => {
        const fetchPublication = async () => {
            await axios({
                url :'http://localhost:3000/api/pub/',  
                mode: 'cors'
            }).then((result) => {
                setPublication(result.data)
                console.log(result.data)
            })
            .catch(err => console.log ({err}))
        };
        fetchPublication();
    }, [maj])



    return (
        <Fragment>
            <div className='properties'>
                {publication.map(item => (
                    <div className='outCard' key={item.publicationID}>
                        <div className='proPic'><img id={item.userID} src={item.userPic} onClick={event => {
                            event.preventDefault()
                            const userId = event.target.id
                            window.location = "/Home/profil?"+userId;   
                        }}/></div>
                        <div className='card cardHome' id={item.publicationID} onClick={ e => {
                            e.preventDefault()
                            const idPub = e.currentTarget.id 
                            window.location = "/HomePub?"+idPub;   
                        }}>
                            <div className='publicationName'>
                                <div className='propertiesName'>
                                    <p className='publicationFirstName'>{item.firstName}</p>
                                    <p className='publicationLastName'>{item.lastName}</p>
                                </div>
                                <div className='propertiesPseudo'>
                                    <p className='publicationPseudo'>{item.pseudo}</p>
                                </div>
                            </div> 
                            <img className='publicationPicture' src={item.publicationPicture} alt={item.title}/>
                            <p className='date'>{item.createdOn}</p>    
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default DisplayAllPublication;