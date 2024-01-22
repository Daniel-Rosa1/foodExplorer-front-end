import {Container} from "./styles.js"

// eslint-disable-next-line react/prop-types
export function Form({title, children}){
    return (
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    )
}