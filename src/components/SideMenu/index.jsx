import { useState } from "react"
import {Container, CloseMenu, Content} from "./styles.js"

import { Link } from "react-router-dom"
import {useAuth} from "../../hooks/auth"

import {Close} from "../../assets/svg/Close.jsx"
import { IoIosSearch } from "react-icons/io";

import {Footer} from "../Footer"
import {Input} from "../Input"
import { useNavigate } from "react-router-dom";


export function SideMenu({ menuIsOpen, onCloseMenu, newDish = false, search=false, onSearch }){
  const {signOut, user} = useAuth();
  const [ role, setRole] = useState(user.role)
  const navigate = useNavigate()


  function handleSignOut(){
    signOut()
    navigate("/")
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      { menuIsOpen &&
        <CloseMenu>
          <button onClick={onCloseMenu}> {Close}  </button>
          <p>Menu</p>
        </CloseMenu>
      }

      <Content>
        { search === true
          ?<Input onChange={onSearch} icon={IoIosSearch} placeholder={"Busque por pratos ou ingredientes"} />
          :<div/>
        }
        <div>
          { newDish === true
            ? role === "admin" && <Link to={"/newdish"}> Novo prato</Link>
            :<Link to={"/"}>Voltar</Link>
          }
          <button onClick={handleSignOut}>Sair</button>
        </div>
        
      </Content>

      
      <Footer/>
    </Container>
  )
}