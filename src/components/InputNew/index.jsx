import {Container} from "./styles.js"

// eslint-disable-next-line react/prop-types
export function InputNew({label: Label, name , width = "" ,...rest}){
    return (
      <Container $width= {String(width)}>
        {Label && <label htmlFor={name} >{Label}</label>}
        <input id={name} {...rest} />
      </Container>
    )
}