import React from "react";
import Card from "./card";
import data from "./data";
import "./css/store.css";

export default function Store() {
  let products = data;

  function mapper(e, index) {
    return (
      <Card
        key={index}
        name={e.nombre}
        price={e.precio}
        image={e.image}
        size={e.medida}
      />
    );
  }

  return (
    <div className="store" id="store">
      <h1>Tienda!</h1>
      <p className="intro">
        Para adquirir nuestros productos podés escribirnos por whatsapp. La
        madera de cada producto puede ser Zoita, Guayubira o Lenga dependiendo
        del stock en el momento. Recordá preguntar si querés alguna madera en
        particular!
      </p>

      <a
        href="https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%20"
        className="hace order"
      >
        <i className="fas fa-bolt"></i> Hacé tu consulta!{" "}
        <i className="fas fa-bolt"></i>
      </a>
      <div className="store-box">
        <div className="card-holder">{products.map(mapper)} </div>
      </div>
    </div>
  );
}
