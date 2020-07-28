import React from "react";
import "./css/card.css";

export default function Card(props) {
  const { price, size, name, image } = props;

  let linker = `https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%201%20${name}%20de%20${size}%20`;

  return (
    <div className="card">
      <div className="card-top">
        <img className="pic" src={`./images/${image}`}></img>
      </div>
      <div className="card-bottom">
        <p className="product-name">{name}</p>
        <p className="size">{size}</p>
        <div className="price-box">
          <p className="price">${price}</p>
        </div>
        <p className="envio">+Costo de envío</p>
        <a href={linker}>
          <button className="buy">
            COMPRAR <i className="fab fa-whatsapp"></i>
          </button>
        </a>
      </div>
    </div>
  );
}
