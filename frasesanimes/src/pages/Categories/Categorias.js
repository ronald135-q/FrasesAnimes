import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header/Header";
import DivCategorias, {
  DivButton,
  HeaderButton,
  HeaderContainer,
  HeaderTitle,
} from "./style";

const Categorias = () => {
  const navigate = useNavigate();
  function homePage() {
    navigate("/");
  }

  function irParaOnePiece() {
    navigate("/OnePiece");
  }

  function irParaHxH() {
    navigate("/Hunter");
  }
  return (
    <>
      {/* <HeaderContainer>
        <HeaderButton>
          <Button
            onClick={homePage}
            variant="text"
            sx={{ fontSize: 20, borderRadius: 30 }}
          >
            Voltar
          </Button>
        </HeaderButton>

        <h1>Frases de animes</h1> */}

      {/* <HeaderButton>
          <Button variant="text" sx={{ fontSize: 20, borderRadius: 30 }}>
            ADMIN
          </Button>
        </HeaderButton>
      </HeaderContainer> */}
      <Header buttonName={"Voltar"} temAdmin={true}>
        <h1 style={{ alignItems: "center" }}>Frases de Animes</h1>
      </Header>
      <DivCategorias>
        <DivButton>
          <Button
            variant="text"
            onClick={irParaOnePiece}
            sx={{ fontSize: 20, borderRadius: 30 }}
          >
            One Piece
          </Button>
        </DivButton>
        <DivButton>
          <Button
            onClick={irParaHxH}
            variant="text"
            sx={{ fontSize: 20, borderRadius: 30 }}
          >
            Hunter x Hunter
          </Button>
        </DivButton>
        <DivButton>
          <Button variant="text" sx={{ fontSize: 20, borderRadius: 30 }}>
            Yugioh
          </Button>
        </DivButton>
        <DivButton>
          <Button variant="text" sx={{ fontSize: 15, borderRadius: 30 }}>
            Fullmetal Alchemist
          </Button>
        </DivButton>
      </DivCategorias>
    </>
  );
};

export default Categorias;
