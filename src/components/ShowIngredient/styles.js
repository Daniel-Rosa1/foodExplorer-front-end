import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  font-size: 0.875rem;

  width: fit-content;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  padding: 4px 8px;
  border-radius: 5px;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 1.16666rem;
  }
`