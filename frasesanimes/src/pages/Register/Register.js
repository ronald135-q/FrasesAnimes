import React, { useState } from "react";
import { DivComponent } from "./styled";
import { Button } from "@mui/material";
import firebase from "../../services/firebaseConnection";
import TextField from "@mui/material/TextField";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleLogin() {
    const user = firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user);
      })
      .catch((err) => {
        console.log(err);
        alert("Ops, parece que algo está errado !");
        return;
      });
  }

  return (
    <DivComponent>
      <TextField
        placeholder="Seu email"
        value={email}
        name="email"
        onChange={onChangeEmail}
      />

      <TextField
        placeholder="*****"
        value={password}
        name={"password"}
        onChange={(text) => setPassword(text)}
      />

      <Button
        onClick={handleLogin}
        style={{ backgroundColor: "black", color: "white" }}
      >
        Criar sua conta
      </Button>
    </DivComponent>
  );
}
