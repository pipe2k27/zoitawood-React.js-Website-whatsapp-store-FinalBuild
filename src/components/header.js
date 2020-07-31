import React, { useState } from "react";
import "./css/header.css";

export default function Header() {
  const [clicked, clicker] = useState(false);

  function handleClick(prevClicked) {
    clicker((prevClicked) => {
      return !prevClicked;
    });
  }

  return (
    <div className="header">
      <img
        src={process.env.PUBLIC_URL + "/images/word.png"}
        alt="logo-word"
        className="logo-word"
      ></img>
      <img
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="logo"
        className="logo"
      ></img>

      <div className={clicked ? "navbar drop" : "navbar colapse"}>
        <a className="nav-element" href="#store">
          Store/Tienda
        </a>
        <a className="nav-element" href="#nosotros">
          Nosotros
        </a>
        <a className="nav-element" href="#footer">
          Contacto
        </a>
      </div>
      <i onClick={handleClick} className="fas fa-bars"></i>
    </div>
  );
}
