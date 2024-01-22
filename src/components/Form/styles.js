import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.form`
  width: 29.75rem;

  background: ${({theme}) => theme.COLORS.DARK_700};

  padding: 4rem;
  border-radius: 0.3125rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  >h2{
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 500;
  }

  >a{
    background:transparent;
    border: none;

    font-size: 0.875rem;
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    background-color: transparent;
    padding: 0;

    h2{
      display: none;
    }

    >a{
      font-size:1.1666rem ;
    }

  }

`