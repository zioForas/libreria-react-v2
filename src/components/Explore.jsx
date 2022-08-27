import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Ver màs <span className="purple">libros</span>
          </h2>
          <Link to="/books">
            <button className="btn">Librería</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
