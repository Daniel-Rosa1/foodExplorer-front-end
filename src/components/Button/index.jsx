import {Container} from "./styles.js"

// eslint-disable-next-line react/prop-types
export function Button({title, icon: Icon, saveDish = false, price, ...rest }){
    return (
      <Container
        type="button"
        $save = {String(saveDish)}
        {...rest}
      >
        {Icon && <Icon size={32}/>}
        {title}
        {price && String(price).replace(".", ",")}
      </Container>
    )
}