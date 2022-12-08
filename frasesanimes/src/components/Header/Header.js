import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, useThemeProps } from "@mui/material";
import { HeaderButton, HeaderContainer } from "./styled";

const Header = ({ children, buttonName, temAdmin }) => {
  const navigate = useNavigate();
  function irCategorias() {
    navigate("/Categorias");
  }

  return (
    <>
      <HeaderContainer>
        <HeaderButton>
          <Button onClick={irCategorias}>{buttonName}</Button>
        </HeaderButton>
        {children}
        {temAdmin && (
          <HeaderButton>
            <Button>Admin</Button>
          </HeaderButton>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
