import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="logolink">valyuta-kurslari.uz</h1>
          </Link>
        </div>
        <div className="leng">
          <span>UZ</span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
          <span>RU</span>
        </div>
        <div className="btns">
          <Link to="/">
            <button>Bosh sahifa </button>
          </Link>
          <Link to="/history">
            <button>kurs tarixi </button>
          </Link>
          <Link to="/contact">
            <button>bog'lanish </button>
          </Link>
        </div>
    </div>
  );
}

export default Navbar;
