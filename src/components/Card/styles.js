import styled from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export  const Container = styled.div`
  position: relative;
  min-width: 304px;
  max-width: 304px;
  height: 462px;
  border-radius: 8px;
  padding: 24px;

  background-color: ${({theme}) => theme.COLORS.DARK_200};

  justify-content: ${({$role}) => $role === "admin"? "center" : "flex-start"};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;


  >button{
    position: absolute;

    background-color: transparent;
    border: none;

    right: 18px;
    top: 16px;
  }

  >figure{
    width: 176px;
    height: 176px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;

    cursor: pointer;

    >img{
      width: 100%;
      height:100%;
      border-radius: 50%;
    }

    transition:300ms;

    &:hover{
      filter: brightness(1.2);
    }
  }


  h3{
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    cursor: pointer;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  >p{
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: 0.875rem;
    text-align: center;
    cursor: pointer;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    
  }

  h3, p{
    transition:300ms;

    &:hover{
      filter: brightness(1.5);
    }
  }


  >div{
    display: flex;
    gap: 14px;
    span{
      font-family: 'Roboto', sans-serif;
      font-size: 2rem;
      color: ${({theme}) => theme.COLORS.CAKE_100};
    }
  }

   @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 257px;
    min-width: 257px;
    height: 377px;
    gap: 12px;

    >button{
      width: 24px;
      height: 24px;

      >svg{
        width: 24px;
        height: 24px;
      }
    }

    >figure{
      width: 132px;
      height: 132px;

      img{
        width: 132px;
        height: 132px;
      }
    }

    >h3{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    p{
      font-size: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical; 
    }
  } 

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
   
    max-width: 210px;
    min-width: 210px;
    height: 292px;
    gap: 12px;

    >button{
      width: 24px;
      height: 24px;

      >svg{
        width: 24px;
        height: 24px;
      }
    }

    >figure{
      width: 88px;
      height: 88px;

      img{
        width: 88px;
        height: 88px;
      }
    }

    >h3{
      font-size: 1.1666rem;
    }

    p{
      display: none;
    }

    >div{
      gap: 6px;
      span{
        font-size: 1.333rem;
      }
    }

    div + div{
      gap: 16px;
    }
  }


`

export const Actions = styled.div`
  display: flex;
  gap: 16px;

  >div{
    display: flex;
    align-items: center;
    gap: 14px;

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

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
    flex-direction: column;
    gap: 50px;
    
    >div{
      justify-content: center;
      padding: 4px 0 ;

      >button{
        width: 24px;
        height: 24px;
      }

      span{
        font-size:1.333rem;
      }
        
    }

    >button{
      height: 32px;
    }
  }
  
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    flex-direction: column;
    gap: 50px;
    
    >div{
      justify-content: center;
      padding: 4px 0 ;

      >button{
        width: 24px;
        height: 24px;
      }

      span{
        font-size:1.333rem;
      }
        
    }

    >button{
      height: 32px;
    }
      
  }

`