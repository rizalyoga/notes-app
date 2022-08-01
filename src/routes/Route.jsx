import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../components/main_page/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
