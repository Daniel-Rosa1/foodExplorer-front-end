import {useState, useEffect, useRef } from "react"

import {Container, ButtonLeft, ButtonRight, Carousel} from "./styles.js"

import {ArrowLeft} from "../../assets/svg/ArrowLeft.jsx"
import {ArrowRight} from "../../assets/svg/ArrowRight.jsx"

export function Section({children, title}){
  const carousel = useRef()

  const[cardWidth, setCardWidth] = useState(104);
  const[width, setWidth] = useState(0);
  const[move, setMove] = useState(0);
  const[moveCarousel, setMoveCarousel] = useState(0);


  function moveLeft(){
    
  }

  return (
    <Container>
      <h3>{title}</h3>
      <section>
        <ButtonLeft>{ArrowLeft}</ButtonLeft>
        <Carousel

         ref={carousel}
        >
          {children}
        </Carousel>   
        <ButtonRight onClick={moveLeft}>{ArrowRight}</ButtonRight>
      </section>
    </Container>
  )
}