import React from "react";
import { HeaderContainer } from "./styled";
import Header from "../../../components/Header/Header";
import { useState, useEffect } from "react";
import lista from "../../../components/data/ListaPlana";
import Listagem from "../../../components/data/Listagem";
import { Container, Text } from "../../../components/data/styled";
const OnePiece = () => {
  let listaCompleta = lista.map((anime) => {
    return (
      <Container>
        <Text>
          <p style={{ color: "white" }}>{anime.anime}</p>
          <p style={{ color: "white" }}>{anime.frase}</p>
        </Text>
      </Container>
    );
  });
  return (
    <>
      <HeaderContainer>
        <h1>Frases de animes</h1>
      </HeaderContainer>

      {listaCompleta}
    </>
  );
};

export default OnePiece;
