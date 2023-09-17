import React from "react";
import Header from "../includes/Header";
import Footer from "../includes/Footer";

function Master({ children }) {

  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  );
}

export default Master;