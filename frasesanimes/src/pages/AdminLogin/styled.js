import styled from "styled-components";
import op from "../../assets/One-Piece.jpg";
import atk from "../../assets/atk.jpg";

export const HeaderContainer = styled.header`
  height: 8vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  padding: 30px;
`;

export const HeaderButton = styled.button`
  font-size: 30px;
  height: 60px;
`;

export const DivComponent = styled.div`
  height: 8vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: relative;
  padding: 30px;
`;

export const DivCategorias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url(${atk});
  background-position: center;
  height: 100vh;
`;
