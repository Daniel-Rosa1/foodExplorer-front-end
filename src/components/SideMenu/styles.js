import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.aside`
  background-color: ${({theme}) => theme.COLORS.DARK_400};
  
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  display: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
    grid-area: none;
    position: fixed;
    z-index: 3;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`

export const CloseMenu = styled.header`
  width: 100%;
  height: 114px;

  padding: 60px 28px 28px;

  display: flex;
  align-items: center;
  gap: 16px;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

  P{
    font-family: 'Roboto', sans-serif;
    font-size: 1.8333rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  >button{
    background-color: transparent;
    border: none;
  }
  
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding: 36px 28px ;

  display: flex;
  flex-direction: column;
  gap: 36px ;
  
  >div + div{
    display: flex;
    flex-direction: column;
    >a{
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight:300 ;
      color: ${({theme}) => theme.COLORS.LIGHT_300};

      padding: 10px;
      border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000} ;
    }

    >button{
      background-color: transparent;
      border: none;
      
      text-align: start;
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight:300 ;
      color: ${({theme}) => theme.COLORS.LIGHT_300};

      padding: 10px;
      border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000} ;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 79vh;
  }
`
