import {useState, useEffect} from 'react';

export function RequireAuth() {

    const [connect, setConnect] = useState([]);
    
    useEffect(() => {
        const getConnect = () => {
            
            const connected = sessionStorage.getItem('isConnected')
            setConnect(connected)
            console.log(connected)
            if(connected == null) {
                document.location.href="http://localhost:3001/"; 
            }
        };
        getConnect();
    }, [])
    
}