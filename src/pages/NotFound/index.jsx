import {Container,} from "./styles"

import {useAuth} from "../../hooks/auth"
import {useNavigate } from "react-router-dom"

export function NotFound(){
  const {signOut} = useAuth();
  const navigate = useNavigate()

  function halndleBack(){
    navigate("/")
  }
  return(
    <Container>
  
      <h1>Pagina não encontrada <small>404</small></h1>
      <button onClick={halndleBack}>voltar</button>

    </Container>
  )
}