import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../components/main_page/MainPage";
import CreateNotes from "../components/create_notes/CreateNotes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="add-note" element={<CreateNotes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
