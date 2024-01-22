import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

import { useAuth } from "../hooks/auth";

import {USER_ROLE} from "../utils/roles"

import {api} from "../services/api"

import { AdminRoutes } from './admin.routes';
import { CostumerRoutes } from './costumer.routes';
import { AuthRoutes } from './auth.routes';
import { NotFound } from '../pages/NotFound';

export function Routes() {
  const { user, signOut  } = useAuth();

  useEffect(() => {
    api.get("/users/validated")
     .catch((erro) =>{
      if(erro.response?.status === 401){
        signOut()
      }
    }) 
  },[])

  function AccessRoute(){

    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes/>;

      case USER_ROLE.CUSTOMER:
        return <CostumerRoutes/>;
        
      default:
        return <AuthRoutes/>;
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}