import styled from "styled-components";
import { DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: .5rem;
padding: 0.75rem 2rem;

height: 48px;
width: 100%;
background-color: ${({theme, $save}) => $save === "true"? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100 };

font-family: 'Poppins', sans-serif;
color: ${({theme}) => theme.COLORS.LIGHT_100 };
font-weight: 500;
font-size: 0.875rem;

border-radius: 5px;
border: none;

@media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  padding: 12px 32px;
  font-size: 1.16666rem;
}

`