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

export const Content = styled.div`
  grid-area: content;
  padding: 2.5rem  7.8125rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

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

  >h2{
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-weight: 500;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 10px  32px 53px;

    >a{
      span{
        font-weight: 500;
        font-size: 1.333rem;
      }
    }

    h2{
      font-size: 2.6666rem;
    }

  }

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  >div{
    display: flex;
    gap: 2rem;
  }

  

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    >div{
      flex-direction: column;
      gap: 2rem;

      >div:nth-child(2) {
        width:100%;
      }
      
      &:nth-child(4){
        flex-direction: row;
      }
    }

  }
`

export const DishImg = styled.div`
  width: 20vw;
  color: ${({theme}) => theme.COLORS.LIGHT_400};
  font-size: 1rem;
  
  >label{
    width: 100%;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    >div{
      height: 48px;
      width: 20vw;

      border-radius: 8px;
      background-color: ${({theme}) => theme.COLORS.DARK_800};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      span{
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size:0.875rem;
      }
      
      input{
        display: none;
      }

      svg{
        width: 1.5rem;
        height: 1.5rem;
        color: ${({theme}) => theme.COLORS.LIGHT_100}
      }
    }

  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    font-size: 1.333rem;
    >label{

      >diV{
        padding: 0 32px;
        justify-content: flex-start;
        width: 100%;
        
        span{
          font-size:1.142rem ;
        }
        svg{
          width: 2rem;
          height: 2rem;
        }

        >input{
          width: 100%;
          display: none;
        }
      }

    }
  }

`

export  const SelectOption = styled.div` 
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  font-family: 'Roboto', sans-serif;
  color: ${({theme}) => theme.COLORS.LIGHT_400};

  >p{
    font-size: 1rem;
  }

  >div{
    width: 20vw;
    height: 48px;

    font-size: 0.875rem;

    padding: 1rem;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  ${({theme}) => theme.COLORS.DARK_800};

    cursor: pointer;

    >div{
      svg{
        width: 24px;
        height: 24px;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {  
    P{
      font-size: 1.3333rem;
    }
    
    >div{
      font-size: 1.3333rem;
      width: 100%;
    }
  }

`

export const Options = styled.aside`
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 5.625rem;
  
  background-color:  ${({theme}) => theme.COLORS.DARK_800};
  border-radius: 8px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  animation: UpDown 300ms forwards ;

  p{
    font-size: 0.875rem;
    cursor: pointer;

    &:hover{
      filter: brightness(1.5);
    }
  }


  @keyframes UpDown {
      0%{
      transform: translateY(-30px);
      opacity: 0.1;
    }
    
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
      
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    top: 7.5rem;

    p{
      font-size: 1.333rem;
    }
  }

`

export const Actions = styled.div`
  display: flex;

  justify-content: end;
  gap: 2rem;

  >button{
    width: fit-content;
    background-color:  ${({theme}) => theme.COLORS.DARK_800};
  }

  button + button{
    background-color:  ${({theme}) => theme.COLORS.TOMATO_400};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    
    >button{
      width: 100%;
      padding: 12px 23px;
    }
  }

`