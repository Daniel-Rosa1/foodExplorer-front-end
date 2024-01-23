import { useState, useEffect } from "react";
import {Container, Content, BannerArea } from "./styles"

import { api } from "../../services/api";

import {Header} from "../../components/Header"
import {Banner} from "../../components/Banner"
import {Card} from "../../components/Card"
import {Section} from "../../components/Section"
import {SideMenu} from "../../components/SideMenu"
import {Footer} from "../../components/Footer"

export function Home(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [dishs, setDishs] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [hasSearch, setHasSearch] = useState(false);
  const [search, setSearch] = useState("")

  useEffect(() =>{
    async function fetchDishs(){
      const response = await api.get("/dish")
      setDishs(response.data)
    }
    fetchDishs()
  },[] ) 

  useEffect(() =>{
    async function fetchDishs(){
      if(search){ 
        const sanitizedSearch = search.trim().toLowerCase()
        const response = await api.get(`/dish?dishName=${sanitizedSearch}&ingredients=${sanitizedSearch}`)
        setFilteredDishes(response.data)
      }
    }

    fetchDishs()
    setHasSearch(true)
  },[search] )

  useEffect(() =>{
    if(!search)
    setHasSearch(false)
    setFilteredDishes([])
  },[search] )

  

  return(
    <Container>
      <SideMenu
        search={true}
        newDish={true}
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        onSearch={(e) => setSearch(e.target.value) }
      />

      <Header
        onOpenMenu={() => setMenuIsOpen(true)}
        onSearch={(e) => setSearch(e.target.value) }
      />

      <BannerArea>
        <Banner/>
      </BannerArea>

      <Content>

        { filteredDishes.length>0 &&
          <Section title={"Pesquisados"}>
            {
              filteredDishes.map(dish =>(
                <Card
                  key={String(dish.id)}
                  id={dish.id}
                  image={dish.dish_img}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                />
              ))
            }
          </Section>
        }

        {
          hasSearch === false && <>
          
            <Section title={"Refeição"}>
              {
                dishs.map(dish =>(
                  dish.category === "Refeição" &&
                  <Card
                  key={String(dish.id)}
                  id={dish.id}
                  image={dish.dish_img}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                  />
                ))
              }
            </Section>
            

            <Section title={"Sobremesas"}>
              {
                dishs.map(dish =>(
                  dish.category === "Sobremesa" &&
                  <Card
                  key={String(dish.id)}
                  id={dish.id}
                  image={dish.dish_img}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                  />
                ))
              }
            </Section>

            <Section title={"Bebidas"}>
              {
                dishs.map(dish =>(
                  dish.category === "Bebidas" &&
                  <Card
                  key={String(dish.id)}
                  id={dish.id}
                  image={dish.dish_img}
                  name={dish.name}
                  description={dish.description}
                  price={dish.price}
                  />
                ))
              }
            </Section>
          </>
        }

      </Content>
      

      <Footer/>
    </Container>
  )
}