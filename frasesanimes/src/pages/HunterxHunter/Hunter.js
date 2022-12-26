import React from "react";
import { useState, useEffect } from "react";
import firebase from "../../services/firebaseConnection";
import BasicCard from "../../components/Card/Card";
import { ContainerDiv } from "./styled";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router";

export default function HunterxHunter() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  const goCategorias = () => {
    navigate("/Categorias");
  };

  useEffect(() => {
    async function dados() {
      firebase
        .database()
        .ref("usuarios")
        .orderByChild("titulo")
        .equalTo("One Piece")
        .once("value", function (snapshot) {
          setList([]);

          snapshot.forEach((chilItem) => {
            const data = {
              key: chilItem.key,
              autor: chilItem.val().autor,
              titulo: chilItem.val().titulo,
              frase: chilItem.val().frase,
            };

            setList((oldArray) => [...oldArray, data]);
          });
        });
    }

    dados();
  }, []);

  let listaCompleta = list.map((anime) => {
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
      <Header goLink={goCategorias} temAdmin={true} buttonName={"Voltar"}>
        <h1>Frases de animes</h1>
      </Header>
      {listaCompleta}
    </>
  );
}
