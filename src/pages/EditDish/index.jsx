import { useState, useEffect } from "react";
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

import { Link, useNavigate, useParams } from "react-router-dom"

import {Header} from "../../components/Header"
import {InputNew} from "../../components/InputNew"
import {IngredientTag} from "../../components/IngredientTag"
import {SectionIngredients} from "../../components/SectionIngredients"
import {Textarea} from "../../components/Textarea"
import {Button} from "../../components/Button"
import {Footer} from "../../components/Footer"
import {SideMenu} from "../../components/SideMenu"

export function EditDish(){
  const [data, setData] = useState(null)

  const [imgFile, setImgFile] = useState(null)
  const [dish_img, setDish_img] = useState("")
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")

  const [ingredients, setIngredients] = useState([])
  const [newIngredients, setNewIngredient] = useState("")

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
    setName(data.dish.name)
    setCategory(data.dish.category)
    setPrice(data.dish.price)
    setDescription(data.dish.description)
    setDish_img(data.dish.dish_img)
    
    data.ingredients.map((ingredient)=>{
      ingredients.includes(ingredient.name)
      ? null
      : setIngredients(prevState => [...prevState, ingredient.name])
    })
  
    
  },[data])
  
  
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
    const sanitizedNewIngredients = newIngredients.trim().toLowerCase()
    setIngredients(prevState => [...prevState, sanitizedNewIngredients])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleUpdateImg(event){
    const file = event.target.files[0]

    setImgFile(file)
  }

  async function handleUpdateDish(){

    if(!dish_img){
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

    const standardizedDescription = description[description.length-1] === "."
      ? description
      : description + "." 

    const newDish ={
      id: params.id,
      name: name.trim(), 
      category, 
      description : standardizedDescription, 
      price, 
      ingredients,
      dish_img
    }

    const dishId = await api.put(`/dish`,newDish)

    if(imgFile !== null){
      const fileUploadForm = new FormData();
      fileUploadForm.append("dish_img", imgFile)
  
      await api.patch(`/dish/dish_img?dish_id=${params.id}`, fileUploadForm)
    }
    

    alert(`${category} atualizado com sucesso!`)
    navigate("/")
  }

  async function deleteDish(){
    const confirm =  window.confirm(`você deseja apagar a/o ${category}` )

    if(confirm){
      await api.delete(`/dish/${params.id}`)
      navigate("/")
    }
  }

  function sanitizedDishName(dishName){
    if(dishName){
      const firstLetter = dishName[0].toUpperCase()
      const sanitizeName = dishName.replace(dishName[0], firstLetter)
      setName(sanitizeName) 
    }else{
      setName("")
    }
  }

  function sanitizedDescription(description){
    if(description){
      const firstLetter = description[0].toUpperCase()
      const descriptionInLowerCase = description.toLowerCase()
      const sanitizeDescription = descriptionInLowerCase.replace(descriptionInLowerCase[0], firstLetter)
      setDescription(sanitizeDescription) 
    }else{
      setDescription("")
    }
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

        { data && 
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
                value={name}
                placeholder={"Ex.: Salada Ceasar"}
                onChange={(e) => sanitizedDishName(e.target.value)}
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
                { //setIngredients()
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
                value={price}
                placeholder={"R$ 00,00"}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div>
              <Textarea 
                title={"Descrição"}
                value={description}
                placeholder={"Fale brevemente sobre o prato, seus ingredientes e composição"}
                onChange={(e) => sanitizedDescription(e.target.value)}
              />
            </div>

            <Actions>

              <Button
                title={`Excluir ${category}` }
                onClick={deleteDish}
              />

              <Button
                title={"Salvar alterações"}
                onClick={handleUpdateDish}
              />

            </Actions>
          </Form>
        }
      </Content>
      
      <Footer/>        
    </Container>
  )
}