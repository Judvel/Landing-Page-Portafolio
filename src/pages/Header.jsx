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
      <section className="header--center-index">
        <nav>
          <ul>
            <li><a href="#about-me">About me</a></li>
            <li><a href="#my-skills">Skills</a> </li>
            <li><a href="#my-works">Works</a> </li>
            <li><a href="#education">Education</a> </li>
          </ul>
        </nav>
      </section>
        <p><a href="#contact">Contacto</a></p>
      </section>
    </header>
  );
};

export default Header;
