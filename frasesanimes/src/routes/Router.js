import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Categorias from "../pages/Categories/Categorias";
import OnePiece from "../pages/Categories/OnePiece/OnePiece";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Categorias" element={<Categorias />} />
        <Route path="/OnePiece" element={<OnePiece />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
