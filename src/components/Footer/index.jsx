import {Container} from "./styles.js"
import { Link } from "react-router-dom";

import {PolygonGray} from "../../assets/svg/PolygonGray.jsx"

export function Footer({}){
  return (
    <Container>
      <Link to={"/"}>
        {PolygonGray}
        <h2>Food explorer</h2>
      </Link>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}