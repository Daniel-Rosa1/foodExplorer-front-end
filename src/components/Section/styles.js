import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap:  1.5rem;

  
  

  >h3{
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-size: 2rem;
    font-weight: 500;
  }

  
  ::-webkit-scrollbar{
    all:unset ;
    width: 0;
    height: 0;
  }
 
 >section{
  position: relative;
  display: flex;
  
  width: 100%;

  >div{
    gap: 27px;
    display: flex ;
    overflow: scroll;
    scroll-behavior: smooth;

  }

  >button{
    position: absolute;
    background-color:transparent;
    border: none;
    z-index: 1;

    margin: 17px;

    >svg path{
      fill: ${({theme}) => theme.COLORS.LIGHT_100};
    }   
  }
 }

 @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap:  2rem;
  
    >h3{
      font-size:1.5rem ;
      font-weight: 400;
    }

    >section {
      >div{
        gap: 16px;
      }
    }
  }

` 


export const Carousel = styled.div`
  
`

export const ButtonRight = styled.button`
  right: 0;
  top: 45%;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`

export const ButtonLeft = styled.button`
  left: 0;
  top: 45%;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`