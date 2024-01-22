import {Container} from "./styles.js"

export function ShowIngredient({ value, ...rest}){
    return (
      <Container {...rest}>
        <span>{value}</span>
      </Container>
    )
}