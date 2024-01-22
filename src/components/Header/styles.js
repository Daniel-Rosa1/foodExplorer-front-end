import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  grid-area: header;

  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 1.5rem 7vw;

  >button{
    width: 13.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: center;
    padding: 3.5rem 1.75rem 1.5rem;
    height: 117px;
    
    div + div{
      display: none;
    }
    
    button{
      display: none;
    }
  }
  
`

export const Loguot = styled.div`
  background: transparent;
  border: none;
  cursor: pointer;

  >svg{
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  &:hover{
    filter: brightness(0.9);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: none;
  }
`

export  const Brand = styled.div`
  font-family: 'Roboto', sans-serif;

  position: relative;

  >button{
    display: none;
  }

  >div{
    width: max-content;
    display: flex;
    gap: 0.625rem ;

    h1{
      font-size: 1.5rem;
      color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    svg{
      width: 24px;
      height: 24px;
    }

    >span{
      color: ${({theme}) => theme.COLORS.CAKE_100};
      position: absolute;
      bottom: -1rem;
      right: 0;
    }
  }  

  div + div{
    display: none;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    
    display: flex;
    align-items: center;
    gap: 1rem;

    >button{
      display: block;
    }

    >div{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      

      h1{
        font-size:21px;
      }
      
      span{
        position: relative;
        bottom: auto;
      }

      svg{
        width: 24px;
        height: 24px;
      }
    }

    div + div{
      display: flex;
      width: 38px;
      height: 38px;
    }
    
  }
`

export const SideMenu = styled.button`
  background-color: transparent;
  border: none;

  color: ${({theme}) => theme.COLORS.LIGHT_100};
`
export const Orderbutton = styled.div`
  display: none;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: relative;

    >div{
      width: 20px;
      height: 20px;
      background-color: ${({theme}) => theme.COLORS.TOMATO_100};
      border-radius: 50%;

      position: absolute;
      top: 0;
      right:0 ;

      display: flex;
      justify-content: center;
      align-items: center;

      >span{
        font-family: 'Poppins', sans-serif;
        font-size:1.1666rem;
      }
    }

    >button{
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;

      width: 38px;
      height: 38px;

      background-color: transparent;
      border: none;

      >svg{
      width: 32px ;
      height: 32px ;
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      }
    }
  }
  
`