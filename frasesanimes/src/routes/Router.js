import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Categorias from "../pages/Categories/Categorias";
import OnePiece from "../pages/Categories/OnePiece/OnePiece";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HunterxHunter from "../pages/HunterxHunter/Hunter";
import AdminLogin from "../pages/AdminLogin/AdminLogin";
import FruitsBasket from "../pages/Categories/FruitsBasket/FruitsBasket";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/OnePiece" element={<OnePiece />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Hunter" element={<HunterxHunter />} />
        <Route path="/Fruits" element={<FruitsBasket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
