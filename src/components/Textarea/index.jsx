import {Container, Text} from "./styles"

export function Textarea({ value, title, ...rest}){
  return (
    <Container>
      <h3>{title}</h3>
      <Text value={value} { ...rest}/>
    </Container>
  )
}