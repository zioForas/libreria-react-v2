import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="books__ratings">
   
        {
          new Array(Math.floor(rating)).fill(0).map((_, index) => (
            <FontAwesomeIcon icon="star" key={index} />
          )) /*gives stars from data*/
        }
        {!Number.isInteger(rating) && (
          <FontAwesomeIcon icon="star-half-alt" />
        )}
    
    </div>
  );
};

export default Rating;
