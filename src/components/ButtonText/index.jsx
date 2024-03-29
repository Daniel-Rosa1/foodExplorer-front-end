import {Container} from "./styles.js"

// eslint-disable-next-line react/prop-types
export function ButtonText({title, ...rest }){
    return (
      <Container type="button" {...rest} >
        {title}
      </Container>
    )
}