import React from "react";
import Header from "../../components/Header/Header";
import DivContainer from "./styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  function onClick() {
    navigate("Categorias");
  }
  return (
    <>
      <Header />
      <DivContainer></DivContainer>
    </>
  );
};

export default HomePage;
