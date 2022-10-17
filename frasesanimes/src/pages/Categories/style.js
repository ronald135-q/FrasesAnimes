import styled from "styled-components";
import xholic from "../../assets/xxxholic.png";
import hxh from "../../assets/hxh.jpg";

const DivCategorias = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  background-image: url(${hxh});
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
