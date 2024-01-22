import {Container} from "./styles.js"


import img from "../../assets/pngegg 1.png"

// eslint-disable-next-line react/prop-types
export function Banner(){
    return (
      <Container>
        <div>
          <img src={img} alt="bolacha de diversas cores" />
        </div>
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Container>
    )
}