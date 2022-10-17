import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Categorias from "../pages/Categories/Categorias";
import OnePiece from "../pages/Categories/OnePiece/OnePiece";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Categorias" element={<Categorias />} />
        <Route path="/OnePiece" element={<OnePiece />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
