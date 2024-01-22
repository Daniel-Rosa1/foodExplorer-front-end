import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.div`
  grid-area: footer ;

  width: 100%;
  font-family: 'Roboto', sans-serif;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 7.6875rem;
  background-color: ${({theme}) => theme.COLORS.DARK_600};

  color: ${({theme}) => theme.COLORS.LIGHT_200};
  font-size: 0.875rem;

  >a{
    display: flex;
    gap: 0.625rem;
    align-items: center;
    color: ${({theme}) => theme.COLORS.LIGHT_700};
    
    h2{
      font-size: 1.5rem;
      font-weight: 700;
    }

    >svg{
      width: 1.875rem;
      height: 1.875rem;
    }

  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 24px ;

    p{
      font-size: 1rem;
    }

    a{
      h2{
        font-size: 1.3333rem;
      }

      svg{
        width: 22px;
        height:18px;
      }
    }
    
  }

  
`