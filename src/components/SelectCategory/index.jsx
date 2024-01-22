import { useState } from "react";

import {Container, SelectOption, Options} from "./styles.js"

import { FiChevronUp , FiChevronDown } from "react-icons/fi";

export function SelectCategory(){
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState("Refeição")

  function handleOptions(){
    isOpen === false? setIsOpen(true) : setIsOpen(false)
  }

  function handleSelect(value){
    setCategory(value)
    setIsOpen(false)
  }


  return (
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
  )
}