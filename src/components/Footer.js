import React from "react";
import "./css/Footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <img
        src="./images/blanco+texto.png"
        className="footer-logo"
        alt="zoita wood"
      />
      <p>General Pacheco, Buenos Aires, Argentina</p>
      <p>Tel / Whatsapp: +54 9 11 6822 0014</p>
      <a href="https://www.instagram.com/zoitawood/">
        <i className="fab fa-instagram instagram"></i>
      </a>
    </div>
  );
}
