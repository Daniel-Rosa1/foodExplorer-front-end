import {useState} from "react"

import {Container, Brand, SideMenu, Loguot ,Orderbutton} from "./styles"

import { IoIosSearch } from "react-icons/io";
import { PiReceipt, PiSignOut } from "react-icons/pi";

import {useAuth} from "../../hooks/auth"
import { useNavigate} from "react-router-dom"

import {Input} from "../Input"
import {Button} from "../Button"
import {Frame} from "../../assets/svg/Frame.jsx"
import {PolygonCake} from "../../assets/svg/PolygonCake"

export function Header({onOpenMenu, onSearch}){
  const navigate = useNavigate();
  const {signOut, user} = useAuth();
  const [userRole, setUserRole] = useState(user.role)


  function handleNewDish(){
    navigate("/newdish")
  }

  function handleSignOut(){
    signOut()
    navigate("/")
  }

  return(
    <Container>
      <Brand>
        <SideMenu onClick={onOpenMenu}>{Frame}</SideMenu>
        <div>
            {PolygonCake}
            <h1>Food Explorer</h1>
            {userRole === "admin"? <span>Admin</span> : <></>  }
        </div>

        {userRole === "customer" 
          ? <Orderbutton>
              <div><span>0</span></div>
              <button>{<PiReceipt/>}</button>
            </Orderbutton>
          : <></>
        }
      </Brand>

      <Input 
        icon={IoIosSearch}
        placeholder={"Busque por pratos ou ingredientes"} 
        onChange={onSearch}
      />
      
      {
       userRole === "admin"
       ?<Button title={"Novo prato"} onClick={handleNewDish}/>
       :<Button  icon={PiReceipt} title={"pedidos(0)"}/>
      }
      
      <Loguot onClick={handleSignOut}>
        <PiSignOut/>
      </Loguot>
    </Container>

  )
}