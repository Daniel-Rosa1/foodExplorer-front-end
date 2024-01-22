import {Container} from "./styles.js"

// eslint-disable-next-line react/prop-types
export function InputWithLabel({label: Label, name ,...rest}){
    return (
      <Container>
        {Label && <label htmlFor={name} >{Label}</label>}
        <input id={name} {...rest} />
      </Container>
    )
}