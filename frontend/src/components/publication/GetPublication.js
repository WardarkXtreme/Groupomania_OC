import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";
import Like from "./Like";

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
                    <div className='card' key={item.publicationID}>
                        <h2 className='publicationTitle'>{item.title}</h2>
                        <div className='publicationName'>
                            <p className='publicationFirstName'>{item.firstName}</p>
                            <p className='publicationLastName'>{item.lastName}</p>
                        </div> 
                        <p className='publicationPseudo'>{item.pseudo}</p>
                        <img className='publicationPicture' src={item.publicationPicture} alt={item.title}/>
                        <p className='date'>{item.createdOn}</p>
                        <div className='agenceLike'>  
                            <Like />
                            <p className='countLike'>{item.like}</p>
                        </div>    
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default DisplayAllPublication;