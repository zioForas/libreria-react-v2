import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Library.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
           
            <Link to="/books" className="footer__link">
              Libros
            </Link>
            <Link to="/cart" className="footer__link">
              Carrito
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2022 Library</div>
        <a href="https://twitter.com/An_Di_Spucci"><span className="footer__link asdp">Quieres una pagina así?</span> </a>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
