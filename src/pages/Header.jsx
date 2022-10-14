import React from "react";
import '../styles/Header.scss';

import logo from "../assets/images/Letter-J-PNG.png";

const Header = () => {
  return (
    <header>
      <section className="header--left">
        <img className="logo" src={logo} />
        <p>Julio Díaz Velásquez</p>
      </section>
      <section className="header--right">
        <p>Contacto</p>
      </section>
    </header>
  );
};

export default Header;
