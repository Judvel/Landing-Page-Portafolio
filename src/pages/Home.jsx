import React from "react";
import "../styles/Home.scss";

import profilePhoto from "../assets/images/photo1659806544.jpeg";
import javasccriptlogo from "../assets/icon/javascript-original.svg";
import htmllogo from "../assets/icon/html5-original-wordmark.svg";
import csslogo from "../assets/icon/css3-original-wordmark.svg";
import nodelogo from "../assets/icon/nodejs-original-wordmark.svg";
import gittlogo from "../assets/icon/git-original-wordmark.svg";
import reactlogo from "../assets/icon/react-original-wordmark.svg";
import webpacklogo from "../assets/icon/webpack-original-wordmark.svg";
import hangman from "../assets/images/gamePage.png";
import howmanydays from "../assets/images/merry-Chistmas-1920.png";
import profileaccounttwitter from "../assets/images/Desktop-1980.png";
import instagramclone from "../assets/images/homePageDesktop.png";
import uachLogo from "../assets/images/logo_uach-614a369aa9528.png";
import aluraLogo from "../assets/images/Alura.png";
import platziLogo from "../assets/images/platzi.png";

const Home = () => {
  return (
    <main>
      <section className="main-presentation-container">
        <img src={profilePhoto} alt="Foto de Perfil" />
        <div>
          <h1>Hello, my name is Julio Díaz.</h1>
          <p>
            I'm a development student with knwoldge in HTML5, CSS3, JavaScript,
            ReactJS, Python
          </p>
          <ul>
            <li>Github</li>
            <li>Gmail</li>
            <li>Linkedin</li>
            <li>Curriculum</li>
          </ul>
        </div>
      </section>

      <section className="main-aboutme-container">
        <div id="about-me">
          <h2>About me</h2>
        </div>
        <div>
          <p>
            Recién egresado de Ingeniería civil electrónica en la Universidad
            Austral de Chile, en busca de oportunidades para adquirir
            experiencia en el area de la programación. Actualmente me estoy
            fomando como desarrollador. Cuento con experiencia en el
            mantenimientos preventivo de equipos médicos y en reparación de
            computadores, además del aprendizaje académico en ingeniería civil
            Electrónica. También poseo conocimiento básicos en Excel,
            conocimiento basico en Python e ingles intermedio.
          </p>
        </div>
      </section>
      <section className="main-skill-container">
        <div className="skill-title" id="my-skills">
          <h2 >Skills</h2>
        </div>

        <div className="main-skill--tools-container">
          <div className="tools-container">
            <img src={htmllogo} alt="" />
            <p>HTML5</p>
          </div>
          <div className="tools-container">
            <img src={csslogo} alt="" />
            <p>CSS3</p>
          </div>
          <div className="tools-container">
            <img src={javasccriptlogo} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="tools-container">
            <img src={nodelogo} alt="" />
            <p>NodeJs</p>
          </div>
          <div className="tools-container">
            <img src={reactlogo} alt="" />
            <p>ReactJS</p>
          </div>
          <div className="tools-container">
            <img src={gittlogo} alt="" />
            <p>Git</p>
          </div>
          <div className="tools-container">
            <img src={webpacklogo} alt="" />
            <p>Webpack</p>
          </div>
        </div>
      </section>

      <section className="main-works-container">
        <h2 id="my-works">My works</h2>
        <div className="main-works--card">
          <img src={hangman} alt="" />
          <h3>Hangman Game</h3>
          <p>HTML5, CSS3, JavaScript</p>
          <div className="main-works--links">
            <a
              className="links-repo"
              href="https://github.com/Judvel/Hangman-Game"
            >
              Repositorio
            </a>
            <a className="links-deploy" href="https://judvel.github.io/Hangman-Game/">
              Ver Demo
            </a>
          </div>
        </div>
        <div className="main-works--card">
          <img src={howmanydays} alt="" />
          <h3>How many days until christmas</h3>
          <p>HTML5, CSS3, JavaScript</p>
          <div className="main-works--links">
            <a className="links-repo" href="https://github.com/Judvel/HowManyDaysUntilChristmas">
              Repositorio
            </a>
            <a className="links-deploy" href="https://judvel.github.io/HowManyDaysUntilChristmas/">
              Ver Demo
            </a>
          </div>
        </div>
        <div className="main-works--card">
          <img src={profileaccounttwitter} alt="" />
          <h3>Profile account Page</h3>
          <p>HTML5, CSS3</p>
          <div className="main-works--links">
            <a className="links-repo" href="https://github.com/Judvel/JuanDC-Twitter-account-profile">
              Repositorio
            </a>
            <a
              className="links-deploy"
              href="https://judvel.github.io/JuanDC-Twitter-account-profile/"
            >
              Ver Demo
            </a>
          </div>
        </div>
        <div className="main-works--card">
          <img src={instagramclone} alt="" />
          <h3>Instagram Clone</h3>
          <p>HTML5, CSS3</p>
          <div className="main-works--links">
            <a
              className="links-repo"
              href="https://github.com/Judvel/Instagram-Clone"
            >
              Repositorio
            </a>
            <a className="links-deploy" href="https://judvel.github.io/Instagram-Clone/">
              Ver Demo
            </a>
          </div>
        </div>
      </section>

      <section className="main-education-container">
        <h2 id="education">Educational Formation</h2>
        <section className="main-education--platform-container">
          <div className="educational-platform">
            <div className="logo">
            <h3>Ingeniería Civil Electónica</h3>
            <h4>Universidad Austral de Chile</h4>
            <p>2015 - 2022</p>
              
            </div>
          </div>
          <div className="educational-platform">
            <div className="logo">
            <h3>Web Developer</h3>
            <h4>Alura Latam</h4>
            <p>2015 - En curso</p>
             
            </div>
          </div>
          <div className="educational-platform">
            <div className="logo">
            <h3>Web Developer</h3>
            <h4>Platzi</h4>
            <p>2022 - En curso</p>
              
            </div>
          </div>
        </section>
      </section>

      <section className="main-form-container">
        <h2 id="contact">Contacto</h2>
        <form>
          <label htmlFor="full-name">Nombre Completo</label>
          <input
            type="text"
            id="full-name"
            className="input-form"
            placeholder="Nombre"
            maxLength="50"
            required
          />

          <label htmlFor="email">Correo electronico</label>
          <input
            type="email"
            id="email"
            className="input-form"
            placeholder="email@dominio.cl"
            required
          />

          <label htmlFor="business">Asuntos</label>
          <input
            type="text"
            id="business"
            className="input-form"
            placeholder="Asuntos"
            maxLength="50"
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            cols="70"
            rows="10"
            id="message"
            className="input-form"
            placeholder="Mensaje"
            maxLength="300"
            required
          />

          <input type="submit" value="Enviar mensaje" className="sent-button" />
        </form>
      </section>
    </main>
  );
};

export default Home;
