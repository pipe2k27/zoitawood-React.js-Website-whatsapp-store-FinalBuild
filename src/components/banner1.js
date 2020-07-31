import React from "react";

export default function Banner1() {
  return (
    <div className="banner1">
      <img
        src={process.env.PUBLIC_URL + "/images/banner-1.jpg"}
        alt="tabla de asado"
        className="tabla-banner"
      ></img>
    </div>
  );
}
