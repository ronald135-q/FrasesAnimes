import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, useThemeProps } from "@mui/material";
import { HeaderButton, HeaderContainer } from "./styled";

const Header = ({ children, buttonName, temAdmin, goLink }) => {
  const navigate = useNavigate();
  function goAdmin() {
    navigate("/AdminLogin");
  }

  return (
    <>
      <HeaderContainer>
        <HeaderButton>
          <Button onClick={goLink}>{buttonName}</Button>
        </HeaderButton>
        {children}
        {temAdmin && (
          <HeaderButton>
            <Button onClick={goAdmin}>Admin</Button>
          </HeaderButton>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
