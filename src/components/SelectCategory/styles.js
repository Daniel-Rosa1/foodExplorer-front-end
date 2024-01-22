import styled from "styled-components";

export  const Container = styled.div` //select
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  font-family: 'Roboto', sans-serif;
  color: ${({theme}) => theme.COLORS.LIGHT_400};

  >p{
    font-size: 1.6rem;
  }

  >div{
    width: 36.5rem;
    height: 4.8rem;

    font-size: 1.4rem;

    padding: 1.6rem;
    border-radius: 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  ${({theme}) => theme.COLORS.DARK_800};

    cursor: pointer;

    >div{
      svg{
        width: 2.4rem;
        height: 2.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT_400};
      }
    }
  }

`

export const Options = styled.aside`
  width: 100%;
  

  position: absolute;
  z-index: 1;
  top:9rem;
  
  background-color:  ${({theme}) => theme.COLORS.DARK_800};
  border-radius: .5rem;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  animation: UpDown 300ms forwards ;

  p{
    font-size: 1.4rem;
    cursor: pointer;
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

`
