import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  h1{
    font-size: 2rem;
    font-family: 'Roboto', sans-serif;
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    small{
      color: ${({theme}) => theme.COLORS.CAKE_100};
    }

  }

  button{
    border: none;

    width: 300px;
    height: 38px;

    border-radius: 8px;
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-size: 1.3rem;
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  }

`
