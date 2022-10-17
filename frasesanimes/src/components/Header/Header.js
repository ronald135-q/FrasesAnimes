import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, useThemeProps } from "@mui/material";
import { HeaderButton, HeaderContainer } from "./styled";

const Header = () => {
  const navigate = useNavigate();
  function irCategorias() {
    navigate("Categorias");
  }

  return (
    <HeaderContainer>
      <HeaderButton>
        <Button onClick={irCategorias}>Categorias</Button>
      </HeaderButton>
      <h1>Frases de Animes</h1>
      <HeaderButton>
        <Button>Admin</Button>
      </HeaderButton>
    </HeaderContainer>
  );
};

export default Header;
