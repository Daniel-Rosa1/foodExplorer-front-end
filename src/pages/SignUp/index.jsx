import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Brand  } from "./styles"

import {PolygonCake} from "../../assets/svg/PolygonCake"

import {Form} from "../../components/Form"
import {InputWithLabel} from "../../components/InputWithLabel"
import {Button} from "../../components/Button"

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return(
    <Container>

      <Brand>
        {PolygonCake}
        <h1>Food Explorer</h1>
      </Brand>

      <Form title={"Crie sua conta"}>
        
        <InputWithLabel 
          label ={"Seu nome"}
          type={"text"}
          placeholder={"Exemplo: Maria da Silva"}
          name={"nome"}
          onChange={e => setName(e.target.value)}
        />

        <InputWithLabel 
          type={"email"}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          label ={"Email"}
          name={"email"}
          onChange={e => setEmail(e.target.value)}
        />

        <InputWithLabel 
          type={"password"}  
          placeholder="No mínimo 6 caracteres"
          label ={"Senha"}
          name={"senha"}
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title={"Criar conta"}
          onClick={handleSignUp}
        />

        <Link to={"/"}>
          Já tenho uma conta
        </Link>

      </Form>
      
      
      
    </Container>
  )
}