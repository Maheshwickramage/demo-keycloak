
import { useEffect, useState } from 'react';

const useAuth = () => {
    const[isLogin, setLogin] = useState(false);

    useEffect(()=>{
        const client = new Keycloak({

            url:import.meta.env.VITE_KEYCLOAK_URL,
            realm:import.meta.env.VITE_KEYCLOAK_REALM,
            clientID:import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
            
        });

        client.init({onload:"login-required"}).then((res)=>setLogin(res));  

    },[])
  return isLogin;
  
};

export default useAuth