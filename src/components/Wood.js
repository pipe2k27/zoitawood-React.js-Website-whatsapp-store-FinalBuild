import React from "react";
import "./css/Wood.css";

export default function Wood() {
  return (
    <div className="wood">
      <h1>La mejor madera del mercado</h1>
      <p className="intro">
        Usamos siempre las mejores maderas, las mismas que se ultilizan para
        fabricar muebles de alta gama. Conocelas en esta sección.
      </p>
      <img src="./images/zoita.jpg" className="wood-pic"></img>
      <img src="./images/guayubira.jpg" className="wood-pic"></img>
      <img src="./images/lenga.jpg" className="wood-pic"></img>
      <img
        src="./images/banner-4.jpg"
        alt="tabla de asado"
        className="tabla-banner2"
        data-aos="fade-up"
      ></img>

      <h1 id="nosotros">Terminacion premium</h1>

      <p className="intro">
        Fabricamos uno a uno nuestros productos y los terminamos a mano, para
        que cada uno sea perfecto.{" "}
      </p>

      <img src="./images/process.jpg" className="wood-pic"></img>
      <a
        href="https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%20"
        className="hace order end"
      >
        Contactanos por Whatsapp <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
