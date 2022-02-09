import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";

function DisplayAllPublication(){

    const [publication, setPublication] = useState([]);
    
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
    }, [])



    return (
        <Fragment>
            <div className='properties'>
                {publication.map(item => (
                    <div className='card' key={item.publicationID} id={item.publicationID} onClick={ e => {
                        e.preventDefault()
                        let idPub = e.currentTarget.id 
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
                ))}
            </div>
        </Fragment>
    );
};

export default DisplayAllPublication;