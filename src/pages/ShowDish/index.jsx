import { useState, useEffect } from "react";
import {api} from "../../services/api"
import {useAuth} from "../../hooks/auth"

import {Container, Main, Dish, InformationDish, Actions } from "./styles"
import { PiCaretLeft } from "react-icons/pi";
import {Minus} from "../../assets/svg/Minus.jsx"
import {Plus} from "../../assets/svg/Plus.jsx"
import { PiReceipt } from "react-icons/pi";


import { Link, useNavigate, useParams } from "react-router-dom"

import {Header} from "../../components/Header"
import {Button} from "../../components/Button"
import {ShowIngredient} from "../../components/ShowIngredient"
import {Footer} from "../../components/Footer"
import {SideMenu} from "../../components/SideMenu"

export function ShowDish(){
  const {signOut, user} = useAuth();
  const [data, setData] = useState(null)

  const [dish_img, setDish_img] = useState("")
  const [name, setName] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() =>{
    async function fetchDish(){
      const response = await api.get(`/dish/${params.id}`)
      setData(response.data)
    }
    fetchDish()
  },[] )

  useEffect(() =>{
    if(!data){
      return 
    }
    setIngredients(data.ingredients)
    setName(data.dish.name)
    setPrice(data.dish.price)
    setDescription(data.dish.description)
    setDish_img(data.dish.dish_img)
    
  },[data])

  const dishImgFile = `${api.defaults.baseURL}/files/${dish_img}`

  function handleEdit(){
    navigate(`/editdish/${params.id}`)
  }

  return(
    <Container >
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Main>
        <Link to={-1}> <PiCaretLeft/> <span>voltar</span> </Link>
        
        { data &&
          <Dish>
            {dishImgFile && <img src={dishImgFile} alt="dcscd" />}  

            <InformationDish>
              <div>
                <h2>{name}</h2>
                <p>{description}</p>

                <div>
                  { ingredients && ingredients.map((ingredient, index) =>(
                      <ShowIngredient
                        key={String(index)}
                        value={ingredient.name}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }
                </div>
              </div>
              
              { 
              <Actions>
                  { user.role !== "admin"
                    ? <div>
                      <button>{Minus}</button>
                      <span>01</span>
                      <button>{Plus}</button>
                    </div>
                    :<></>
                   }
                  { user.role !== "admin"
                    ?<Button 
                        icon={PiReceipt}
                        title={"incluir ∙ R$ "}
                        price={price}
                      />
                    :<Button 
                        title={"Editar prato"}
                        onClick={handleEdit}
                      />
                  }
                </Actions>
              }

            </InformationDish>


          </Dish>
        }

      </Main>

      <Footer/>        
    </Container>
  )
}