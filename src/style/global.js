import { createGlobalStyle } from "styled-components"
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 12px
    }
  }

  body{

    background-color: ${({theme}) => theme.COLORS.DARK_400};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased;

    

    //font-family: 'Poppins', sans-serif;
    //font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }

  input{
    outline: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }


  button:hover, a:hover {
    filter: brightness(0.9);
  }

`