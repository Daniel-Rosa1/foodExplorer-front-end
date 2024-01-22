import {Container} from "./styles.js"

import {Plus} from "../../assets/svg/Plus.jsx"
import {X} from "../../assets/svg/X.jsx"

export function IngredientTag({isNew, value, onClick, ...rest}){
    return (
      <Container $isnew={String(isNew)}>
        <input 
          type="text" 
          value={value}
          readOnly ={!isNew}
          {...rest} 
        />

        <button 
          type="button"
          onClick={onClick}
        >
          {isNew? Plus : X}
        </button>
      </Container>
    )
}