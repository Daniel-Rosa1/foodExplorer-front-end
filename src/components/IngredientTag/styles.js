import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isnew }) => $isnew === "true"  ? "transparent" : theme.COLORS.LIGHT_500};
  border: ${({ theme, $isnew }) => $isnew === "true" ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  
  color: ${({ theme }) => theme.COLORS.CAKE_100};

  border-radius: 8px;
  padding: 10px 16px;

  > button { 
    border: none;
    background: none;

    display:flex;
    justify-content:center;
    align-items:center;

    >svg{
      color: ${({ theme, $isnew }) => $isnew === "true"? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100 };
    }
  }

  >input{
    width: 5rem ;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    
    border:none;
    background:transparent;
    
    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 10px 12px;
    >input{
      width: 70px;
      font-size:1.333rem;
    }
  }
  
`