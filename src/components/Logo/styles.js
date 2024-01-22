import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints";

export  const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: end;

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
    }
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

      svg{
        width: 24px;
        height: 24px;
      }
    }
  }
`

export const Menu = styled.button`
  background-color: transparent;
  border: none;

  color: ${({theme}) => theme.COLORS.LIGHT_100};
`