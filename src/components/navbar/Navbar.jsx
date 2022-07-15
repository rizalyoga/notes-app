import React from "react";
import "./Navbar.css";

const Navbar = ({ onSearchNotes }) => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <img src="./note.png" alt="logo" />
          <h1>Notes APP</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Judul Catatan..."
            onChange={(e) => onSearchNotes(e.target.value)}
          />
        </div>
      </div>
      <div className="underline"></div>
    </>
  );
};

export default Navbar;
