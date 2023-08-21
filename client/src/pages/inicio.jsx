
import React from "react";
import Home from "../components/Home";
import { CartProvider } from "../context/CartContext";
import HeaderInicio from "../components/HeaderInicio";

const App = () => {
  /* Envolvemos la home con el provider del context */
  return (
    <>
    <HeaderInicio/>
    <CartProvider>
      <Home />
    </CartProvider>
    </>
  );
};

export default App;
