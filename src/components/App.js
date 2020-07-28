import React from "react";
import Header from "./header";
import Banner1 from "./banner1";
import TextBanner1 from "./text-banner1";
import Store from "./store";
import Wood from "./Wood.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <TextBanner1 />
      <Banner1 />
      <Store />
      <img
        src="./images/blanco+texto.png"
        className="banner-zoita"
        alt="zoita wood"
      />
      <Wood />
      <Footer />
    </div>
  );
}

export default App;
