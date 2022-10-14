import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import './styles/style.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
