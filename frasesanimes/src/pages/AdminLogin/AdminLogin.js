import React, { useState } from "react";
import {
  DivCategorias,
  DivComponent,
  HeaderButton,
  HeaderContainer,
} from "./styled";
import { TextField, Button } from "@mui/material";
import firebase from "../../services/firebaseConnection";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router";

export default function AdminLogin() {
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function goCategorias() {
    navigate("/Categorias");
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleLogin() {
    const user = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log(value);
        console.log("deu certo");
        goCategorias();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <Header buttonName={"Categorias"} goLink={goCategorias}>
        <h1>Frases de Animes</h1>
      </Header>

      <DivCategorias>
        <TextField
          style={{
            backgroundColor: "white",
            width: "40%",
            borderRadius: "20%",
          }}
          label={"Email"}
          value={email}
          name={"email"}
          onChange={onChangeEmail}
        />

        <TextField
          style={{
            backgroundColor: "white",
            width: "40%",
            borderRadius: "20%",
          }}
          type={"password"}
          value={password}
          name="email"
          onChange={(text) => setPassword(text.target.value)}
        />
        {console.log(TextField)}

        <Button
          onClick={handleLogin}
          style={{
            backgroundColor: "black",
            color: "white",
            width: "40%",
            borderRadius: "15%",
          }}
        >
          Login
        </Button>

        <Button
          onClick={handleLogin}
          style={{
            backgroundColor: "black",
            color: "white",
            width: "40%",
            borderRadius: "15%",
          }}
        >
          Criar sua conta
        </Button>
      </DivCategorias>
    </>
  );
}
