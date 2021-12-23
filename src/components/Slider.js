import React, { useState } from "react";
import products from "../products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function Slider() {
  const [current, setCurrent] = useState(0);
  const length = products.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };
  if (!Array.isArray(products) || length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      {products.map((products, index) => {
        return (
          <div
            className={current === index ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={products.image}
                alt={products.name}
                className="p_image"
              />
            )}
          </div>
        );
      })}
      <div className="arrow">
        <FontAwesomeIcon
          className="left-arrow"
          icon={faArrowAltCircleLeft}
          onClick={prevSlide}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="right-arrow"
          icon={faArrowAltCircleRight}
          onClick={nextSlide}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Slider;
