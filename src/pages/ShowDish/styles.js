import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 6rem auto 4.8125rem;
  grid-template-areas: "header" "content" "footer";


  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-rows: 117px auto 77px;
    grid-template-areas: "header" "content" "footer";
  }

`

export const Main = styled.main`
  font-family: 'Poppins', sans-serif;
  grid-area: content;

  display: flex;
  flex-direction: column;
  gap: 42px;

  padding: 32px 7vw;

  a{
    width: fit-content;
    display: flex;
    align-items: center;

    >svg{
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      font-size: 2rem;
    }

    >span{
      font-family: 'Poppins', sans-serif;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 16px 56px;
    gap: 16px;
    a{
      >span{
        font-size: 2rem;
        font-weight: 400;
      }
      >svg{
        width: 32px;
        height: 32px;
      }
    }
  }

`

export const Dish = styled.article`
  grid-area: content;

  width: 100%;
  height: 100%;

  display: flex;
  gap: 48px;

  >img{
    max-width: 390px;
    min-width: 390px;
    max-height: 390px;
    min-height: 390px;
    border-radius: 50%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;
    align-items: center;
    gap: 16px;

    >img{
      max-width: 264px;
      min-width: 264px;
      max-height: 264px;
      min-height: 264px;
    }
  }

`

export const InformationDish= styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 48px;

  div{
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    >h2{
      font-size: 2.5rem;
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    >p{
      font-size: 1.5rem;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    >div{
      flex-wrap: wrap;
      flex-direction: row;
      gap: 12px;
    }
  }

  >div + div{
    flex-direction: row;
    gap: 33px;
    

    >div{
      flex-wrap: nowrap;
      gap:14px;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  
    >div{
      align-items: center;

      >h2{
        font-size: 2.3333rem;
        font-weight: 500;
      }

      >p{
        font-size:1.333rem ;
        text-align: center;
      }

      >div{
        padding: 0 25px ;
        gap: 24px;
      }
     
    }

    >div + div{
    flex-direction: row;
    gap: 16px;

    button{
      width: 100%;
    }

    >div{
      padding: 0;
      flex-wrap: nowrap;
      gap:16px;

      span{
        font-size: 1.8333rem;
      }

     >button{
      width: 28px;
      height: 28px;
      
      >svg{
        width: 28px;
        height: 28px;
      }
     }
    }
  }

  }

`

export const Actions = styled.div`
  display: flex;

  >div{
    display: flex;
    align-items: center;

    >span{
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }

    >button{
      background-color: transparent;
      border: none;

      >svg{
        width: 24px;
        height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
      }
    }
  }
  
  button{
    width: max-content;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    >button{
      padding: 8px 16px;
      

      svg{
       width: 22px;
       height: 22px;
      }
    }
  }

`
