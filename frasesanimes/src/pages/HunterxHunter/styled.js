import styled from "styled-components";
import hxhx from "../../assets/hxhx.jpg";

export const ContainerDiv = styled.div`
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 10;
  background-color: black;
  border: 5px solid black;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-image: url(${hxhx});
  height: 100vh;
`;

const DivCategorias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 90vh;
`;

export const HeaderContainer = styled.header`
  height: 8vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  position: relative;
  padding: 30px;
`;

export const HeaderButton = styled.button`
  font-size: 30px;
  height: 60px; ;
`;

export const DivButton = styled.button`
  font-size: 30px;
  height: 60px;
  width: 30%;
`;

export default DivCategorias;
