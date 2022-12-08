import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Categorias from "../pages/Categories/Categorias";
import OnePiece from "../pages/Categories/OnePiece/OnePiece";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HunterxHunter from "../pages/HunterxHunter/Hunter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/OnePiece" element={<OnePiece />} />
        <Route path="/Register" element={<Register />} />
        <Route path="Hunter" element={<HunterxHunter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
