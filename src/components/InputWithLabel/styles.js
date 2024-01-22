import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"


export  const Container = styled.div`
  width: 100%;
  font-family: 'Roboto', sans-serif;

  display: flex;
  flex-direction: column;
  gap: 8px;

  >label{
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  >input{
    font-size: 1rem;
    height: 48px;
    width: 100%;
    padding: 12px 14px ;
    

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: ${({theme}) => theme.COLORS.DARK_900} ;

    border: none;
    border-radius: 8px;

    &:placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }


  >svg{
    margin-left: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    >label{
      font-size:1.333rem ;
    }

    >input{
      font-size: 1.333rem;
    }

  }

`