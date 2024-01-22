import styled from "styled-components";

import {DEVICE_BREAKPOINTS} from "../../style/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: "header" "banner" "content" "footer";
  grid-template-rows: 6rem 446px auto 4.7125rem;
  grid-template-columns: 100%;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-areas: "header" "banner" "content" "footer";
    grid-template-rows: 9.5rem 226px auto 4.7125rem;

  }

`

export const BannerArea = styled.div`
  grid-area: banner;
  width: 100%;
  height: 100%;

  padding: 164px 124px 0;


  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 44px 16px 0 30px;

  }

` 

export const Content = styled.main`
  grid-area: content;
  padding: 64px  7.75rem 2.8125rem;
  

  display: flex;
  flex-direction: column;
  gap: 63px ;

  

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 0px 24px 24px  ;

    
    gap:24px ;
    
    &:nth-child(1){
      background-color: red;
    }
  }

`

