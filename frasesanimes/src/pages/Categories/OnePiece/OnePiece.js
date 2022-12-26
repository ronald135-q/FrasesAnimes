import React from "react";
import { HeaderContainer } from "./styled";
import Header from "../../../components/Header/Header";
import { useState, useEffect } from "react";
import lista from "../../../components/data/ListaPlana";
import Listagem from "../../../components/data/Listagem";
import { Container, Text } from "../../../components/data/styled";
import firebaseConnection from "../../../services/firebaseConnection";
import { ContainerDiv } from "./styled";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BasicCard from "../../../components/Card/Card";
import { useNavigate } from "react-router";

const OnePiece = () => {
  const [list, setList] = useState([]);

  const navigate = useNavigate();

  function goHome() {
    navigate("/Categorias");
  }

  useEffect(() => {
    async function dados() {
      await firebaseConnection
        .database()
        .ref("usuarios")
        .orderByChild("titulo")
        .equalTo("One Piece")
        .once("value", (snapshot) => {
          setList([]);
          snapshot.forEach((chilItem) => {
            const data = {
              key: chilItem.key,
              autor: chilItem.val().autor,
              titulo: chilItem.val().titulo,
              frase: chilItem.val().frase,
            };
            console.log(data);

            setList((oldArray) => [...oldArray, data]);
          });
        });
    }

    dados();
  }, []);

  let listaCompleta = list.map((anime) => {
    console.log(anime.titulo);
    return (
      <ContainerDiv key={anime.key}>
        <BasicCard
          autor={anime.autor}
          frase={anime.frase}
          titulo={anime.titulo}
        />
      </ContainerDiv>
    );
  });
  return (
    <>
      <Header temAdmin={true} buttonName={"Voltar"} goLink={goHome}>
        <h1>Frases de animes</h1>
      </Header>
      {listaCompleta}
    </>
  );
};

export default OnePiece;
