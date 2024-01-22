import { useState } from "react";

import {useAuth} from "../../hooks/auth"

import { Container, Brand  } from "./styles"
import { Link } from "react-router-dom";

import {PolygonCake} from "../../assets/svg/PolygonCake"

import {Form} from "../../components/Form"
import {InputWithLabel} from "../../components/InputWithLabel"
import {Button} from "../../components/Button"

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return(
    <Container>

      <Brand>
        {PolygonCake}
        <h1>Food Explorer</h1>
      </Brand>

      <Form title={"Faça login"}>
        
        <InputWithLabel 
          type={"email"}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          label ={"Email"}
          name={"email"}
          onChange = {e => setEmail(e.target.value)}
        />

        <InputWithLabel 
          type={"password"}  
          placeholder="No mínimo 6 caracteres"
          label ={"Senha"}
          name={"senha"}
          onChange = {e => setPassword(e.target.value)}
        />

        <Button 
          title={"Entrar"}
          onClick={handleSignIn}
        />

        <Link to={"/register"}>
          Criar uma conta
        </Link>

      </Form>
      
      
      
    </Container>
  )
}