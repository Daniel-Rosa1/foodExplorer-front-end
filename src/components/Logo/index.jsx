import {Container, Menu} from "./styles.js"

import {Frame} from "../../assets/svg/Frame.jsx"
import {PolygonCake} from "../../assets/svg/PolygonCake"
// eslint-disable-next-line react/prop-types
export function Logo({onOpenMenu, title , isAdmin }){
  
    return (
      <Container>
        <Menu onClick={() => setMenuIsOpen(true)}>{Frame}</Menu>
        <div>
          {PolygonCake}
          <h1>{title}</h1>
          {isAdmin === "admin"? <span>Admin</span> : <></>  }
        </div>
      </Container>
    )
}