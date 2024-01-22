import {useAuth} from "../../hooks/auth"
import {useState} from "react"
import { api } from "../../services/api.js"
import { useNavigate } from "react-router-dom"

import {Container, Actions} from "./styles.js"

import {Minus} from "../../assets/svg/Minus.jsx"
import {Plus} from "../../assets/svg/Plus.jsx"
import {Heart} from "../../assets/svg/Heart.jsx"
import {Pencil} from "../../assets/svg/Pencil.jsx"

import {Button} from "../Button"

export function Card({id,name, description, price, image}){
  const { user} = useAuth();
  const [userRole, setUserRole] = useState(user.role)
  const dishImg = `${api.defaults.baseURL}/files/${image}`
  const navigate = useNavigate()

  const sanitizedNumber = price.toFixed(2)
  
  function handleEdit(){
    navigate(`/editdish/${id}`)
  }
  
  function handleShowDish(){
    navigate(`/showdish/${id}`)
  }

  return (
    <Container $role ={userRole} >
      { userRole === "admin"
        ? <button onClick={handleEdit}>{Pencil}</button>  
        : <button>{Heart}</button> 
      }

      <figure onClick={handleShowDish}>
        <img src={dishImg} alt={`Foto de ${name}`} /> 
      </figure>

      <h3 onClick={handleShowDish} >{name}</h3>

      <p onClick={handleShowDish} >{description}</p>

      <div>
        <span>R$</span>
        <span>{String(sanitizedNumber).replace(".", ",")}</span>
      </div>

      { userRole !== "admin"
      ?<Actions>
          <div>
            <button>{Minus}</button>
            <span>01</span>
            <button>{Plus}</button>
          </div> 

          <Button title={"Incluir"}/>
        </Actions>
      : <></>
      }
    </Container>
  )
}