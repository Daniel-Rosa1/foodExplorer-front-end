import styled from "styled-components";

import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 24px;
  }
  
`

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.9rem;
 
  >h1{
    font-family: 'Roboto', sans-serif;
    font-size:2.625rem;
  }

  >svg{
    width: 44px;
    height: 44px;
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top:158px ;
    margin-bottom: 73px ;
    width: 100%;

    
    >h1{
      font-size:3.16666rem;
    }
  }

  
  
`