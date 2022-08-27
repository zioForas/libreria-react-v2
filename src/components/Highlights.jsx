import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container section-bg">
        <div className="row">
          <h2 className="section__title">
            Porque elegir <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Facil y Rapido"
              para="Recibe acceso a los libros que compraste en linea 24/7."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="10,000+ libros"
              para="Library tiene libros en todos los generos que mas te gustan"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Precios imbatibles"
              para="Pilla tus libros favoritos por tan solo 9,99€"
            />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
