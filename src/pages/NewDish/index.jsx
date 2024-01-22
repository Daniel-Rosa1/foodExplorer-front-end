import { useState } from "react";
import {api} from "../../services/api"

import {
  Container,
  Content,
  Form,
  DishImg,
  SelectOption,
  Options,
  Actions
} from "./styles"

import { PiCaretLeft } from "react-icons/pi";
import { FiUpload, FiChevronDown, FiChevronUp} from "react-icons/fi";

import { Link, useNavigate,  } from "react-router-dom"

import {Header} from "../../components/Header"
import {InputNew} from "../../components/InputNew"
import {IngredientTag} from "../../components/IngredientTag"
import {SectionIngredients} from "../../components/SectionIngredients"
import {Textarea} from "../../components/Textarea"
import {Button} from "../../components/Button"
import {Footer} from "../../components/Footer"
import {SideMenu} from "../../components/SideMenu"

export function NewDish(){

  const [imgFile, setImgFile] = useState(null)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("- -Selecionar categoria- -")

  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredient] = useState("")

  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  function handleOptions(){
    isOpen === false? setIsOpen(true) : setIsOpen(false)
  }

  function handleSelect(value){
    setCategory(value)
    setIsOpen(false)
  }

  function handleAddIngredient(){
    if(newIngredients === ""){
      return alert("não é possível adicionar ingrediente vazio")
    }
    setIngredients(prevState => [...prevState, newIngredients])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleUpdateImg(event){
    const file = event.target.files[0]

    setImgFile(file)
  }

  async function handleNewDish(){

    if(!imgFile){
      return alert("Você precisa inserir uma imagem para o prato")
    }

    if(!name){
      return alert("Digite o nome do prato")
    }

    if(category === "- -Selecionar categoria- -"){
      return alert("Favor selecionar categoria")
    }

    if(newIngredients){
      return alert("Ingrediente ainda não adicionado, clique em adicionar ou deixe o campo em braco")
    }

    if(ingredients.length === 0){
      return alert("Favor inserir ingredientes")
    }
    
    if(!price ){
      return alert("Favor inserir valor")
    }
    
    if(!description ){
      return alert("Favor inserir descrição")
    }

    const newDish ={
      name, 
      category, 
      description, 
      price, 
      ingredients
    }

    const fileUploadForm = new FormData();
    fileUploadForm.append("dish_img", imgFile)

    const dishId = await api.post("/dish",newDish)


    await api.patch(`/dish/dish_img?dish_id=${dishId.data}`, fileUploadForm)
    

    alert(`${category} criado com sucesso!`)
    navigate(-1)
  }


  return(
    <Container >
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />

      <Content>
        <Link to={-1}> <PiCaretLeft/> <span>voltar</span> </Link>
        <h2>Adicionar prato</h2>

        <Form >
          <div>
            <DishImg>
              <label htmlFor="dish_img">
                <span>Imagem do prato</span>
                <div>
                  <FiUpload/>
                  <span>Selecione imagem</span>
                  <input type="file" id="dish_img" onChange={handleUpdateImg}/>
                </div>
              </label>
            </DishImg>

            <InputNew 
              name={"Nome"} 
              label={"Nome"} 
              type={"text"} 
              
              placeholder={"Ex.: Salada Ceasar"}
              onChange={(e) => setName(e.target.value)}
            />

            <SelectOption>
              <p>Refeições</p>
              <div onClick={handleOptions}>
                <span>{category}</span>
                <div>
                  {isOpen ? <FiChevronUp/> :<FiChevronDown/>}
                </div>
              </div>
              {
                isOpen && 
                <Options>
                  <p onClick={(e) => handleSelect(e.target.innerText)} >Refeição</p>
                  <p onClick={(e) => handleSelect(e.target.innerText)} >Sobremesa</p>
                  <p onClick={(e) => handleSelect(e.target.innerText)} >Bebidas</p>
                </Options>
              }
            </SelectOption>
          </div>

          <div>
            <SectionIngredients title={"Ingredientes"}>
              {
                ingredients.map((ingredient, index) =>(
                  <IngredientTag
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))
              }

              <IngredientTag 
                isNew 
                placeholder="Adicionar" 
                value={newIngredients}
                onChange = {(e) => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </SectionIngredients>

            <InputNew 
              width="25%"
              name={"price"} 
              label={"Preço"} 
              type={"number"} 
              placeholder={"R$ 00,00"}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <Textarea 
              title={"Descrição"}
              value={description}
              placeholder={"Fale brevemente sobre o prato, seus ingredientes e composição"}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <Actions> 
            <Button
              saveDish={true}
              title={"Salvar alterações"}
              onClick={handleNewDish}
            />
          </Actions>
        </Form>
      </Content>
      
      <Footer/>        
    </Container>
  )
}