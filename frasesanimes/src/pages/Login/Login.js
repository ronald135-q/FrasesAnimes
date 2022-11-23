import React, { useState } from "react";
import { DivComponent } from "./styled";
import { TextField, Button } from "@mui/material";
import firebase from "../../services/firebaseConnection";

export default function Login() {
  let [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const user = firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <DivComponent>
      <TextField
        label={"Email"}
        value={email}
        name={"email"}
        onChange={(text) => setEmail(text)}
      />

      <TextField
        placeholder="*****"
        value={password}
        name={"email"}
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
