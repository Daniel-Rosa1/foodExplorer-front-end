import styled from "styled-components";

import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.div`
  width: 100%;
  height: 48px;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  padding: 0.75rem 0.875rem;

  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  background-color: ${({theme}) => theme.COLORS.DARK_900} ;

  >label{
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  >input{
    height: 1.125rem;
    padding: 0.75rem 0.875rem ;
    
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    background-color: transparent;
    outline: none;

    border: none;
    

    &:placeholder{
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }

  >svg{
    color: ${({theme}) => theme.COLORS.LIGHT_400};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 12px 14px ;

    >input{
      width: 100%;

      &:placeholder{
        font-size: 1.333rem;
      }
    }
  }

`