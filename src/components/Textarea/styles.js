import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.div`
  width: 100%;
  
  font-family: 'Roboto', sans-serif;
  
  display: flex;
  flex-direction: column;
  gap: 16px;

  >h3{
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    font-weight: 400;
  }
    
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    >h3{
      font-size: 1.333rem;
    }
  }

`

export const Text = styled.textarea`
  width: 100%;
  height: 172px;
  font-family: 'Roboto', sans-serif;
    
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background-color: ${({theme}) => theme.COLORS.DARK_800};

  border: none;
  outline: none;
  resize: none;

  padding: 14px;
  border-radius: 8px;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.333rem;
  }

`
