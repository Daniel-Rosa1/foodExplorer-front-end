import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.div` 
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px ;

  >h3{
    color:  ${({theme}) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;
    font-weight: 400 ;
    font-size: 1rem;
  }

  >div{
    padding: 4px 8px ;
    border-radius: 8px;
    
    background-color:  ${({theme}) => theme.COLORS.DARK_800};

    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    >h3{
      font-size: 1.3333rem;
    }

    >div{
      width: 100%;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    >div{
      justify-content:space-between;
    }
  }

  

  

`