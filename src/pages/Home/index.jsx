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
  const [hasSearch, setHasSearch] = useState(false);
  const [search, setSearch] = useState("")

  useEffect(() =>{
    async function fetchDishs(){
      const response = await api.get("/dish/")
      setDishs(response.data)
    }
    fetchDishs()
  },[hasSearch] ) 

  useEffect(() =>{
    async function fetchDishs(){
      if(search){ 
        const response = await api.get(`/dish?dishName=${search}&ingredients=${search}`)
        setDishs(response.data)
      }
    }
    fetchDishs()
    setHasSearch(true)
  },[search] )

  useEffect(() =>{
    if(!search)
    setHasSearch(false)
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
 

        </Content>
      

      <Footer/>
    </Container>
  )
}