import styled from "styled-components";

import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.div`
  width: 100%;
  height: 16.25rem;

  grid-area: banenr;

  background: ${({theme}) => theme.COLORS.GRADIENT_200};
  color: ${({theme}) => theme.COLORS.LIGHT_300};

  display: flex;
  justify-content:space-between;

  border-radius: 8px;
  
  >div{
    position: relative;

    width: 50%;

    display:flex ;
    flex-direction: column;
    justify-content: center;

    
    img{
      max-width: 120%;
      position: absolute;
      bottom: 0;
      left: -3.125rem;
    }

    h2{
      font-size: 2.5rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }

    p{
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-area: banner;
    height: 10rem;
    width: 100%;
    
    border-radius: 3px;
    text-align: start;


    >div{
      &:first-child{
        width: 45%;

        img{
          
        }
      }

      &:nth-child(2){
        width: 55%;
      }

      
      >h2{
        font-size: 1.5rem;
      }

      p{
        font-family: 'Poppins', sans-serif;
      }
      

      img{
        left: -20px;
        max-width: 50vw;
        max-height: 162px;
      }
    }

  }
`