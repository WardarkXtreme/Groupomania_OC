import React, {Fragment, useState, useEffect} from 'react';
import axios from "axios";

function DisplayProfil(){

    const [profil, setProfil] = useState([]);
    
    useEffect(() => {
        const fetchProfil = async () => {
            const id = window.location.search.slice(1);
            await axios({
                url :'http://localhost:3000/api/auth/user/'+id,  
                mode: 'cors'
            }).then((result) => {
                setProfil(result.data)
                console.log(result.data)
            })
            .catch(err => console.log ({err}))
        };
        fetchProfil();
    }, [])



    return (
        <Fragment>
            <div className='contentProfil'>
                {profil.map(item => (
                    <div className='cardProfil' key={item.userID}>
                        <div>
                            <img src={item.userPic} alt={item.lastName}/>
                        </div>
                        <div className='infoUser'>
                            <p>{item.firstName}</p>
                            <p>{item.lastName}</p>
                            <p>{item.bio}</p>
                        </div>
                    </div>
                ))}    
            </div>
        </Fragment>
    );
};

export default DisplayProfil;