import styled from "styled-components";
import { Link } from "react-router-dom";

export  const Container = styled(Link)`

background:transparent;
border: none;

font-size: 0.875rem;
font-family: 'Poppins', sans-serif;
color: ${({theme}) => theme.COLORS.LIGHT_100};

`