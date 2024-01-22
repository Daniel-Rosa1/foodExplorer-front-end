import {Container} from "./styles.js"

// eslint-disable-next-line react/prop-types
export function Input({icon: Icon, name ,...rest}){
    return (
      <Container>
        {Icon && <Icon size={24}/>}
        <input id={name} {...rest} />
      </Container>
    )
}