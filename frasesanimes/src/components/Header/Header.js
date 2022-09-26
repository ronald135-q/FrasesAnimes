import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import {
  HeaderButton,
  HeaderContainer,
  LeftHeaderButton,
  RightHeaderButton,
} from "./styled";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderButton>
        <Button>Categorias</Button>
      </HeaderButton>
      <h1>Frases de Animes</h1>
      <HeaderButton>
        <Button>Admin</Button>
      </HeaderButton>
    </HeaderContainer>
  );
};

export default Header;
