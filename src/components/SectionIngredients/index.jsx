import {Container} from "./styles.js"

export function SectionIngredients({children, title}){

  return (
    <Container>
      <h3>{title}</h3>
      <div>
        {children}
      </div>
    </Container>
  )
}