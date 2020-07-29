import React from "react";
// import { Link } from "react-router-dom";
export default function TextBanner1() {
  return (
    <div>
      <div className="text-banner1">
        <img src="./images/banner-3.jpg" className="banner2"></img>
      </div>

      <h1>Pasion por la madera</h1>
      <p className="intro">
        Todos nuestros productos son elaborados localmente y terminados a mano
        usando las mejores maderas del mercado. De ahi surgen nuestras tablas de
        picar y asado, las bandejas y toda nuestra linea de productos.
        Seleccionamos cada pieza de madera para que tengas el producto que te
        merecés.
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%20"
        className="hace order"
      >
        <i className="fas fa-bolt"></i> ir a la Tienda!{" "}
        <i className="fas fa-bolt"></i>
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=5491168220014&text=Buenas,%20te%20puedo%20hacer%20un%20pedido:%20"
        className="hace order"
      >
        Hacé tu consulta! <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}
