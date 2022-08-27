import React from "react";
import { Link } from "react-router-dom";
import UndrawBooks from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>La Mejor Libraria On-line en España</h1>
            <h2>
              Encuentra tu libro favorito con <span className="purple">Library</span>
            </h2>
            <Link to="#features">
              <button className="btn">Ver Libros</button>
            </Link>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
