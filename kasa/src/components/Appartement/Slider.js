import "./../../styles/appartements/_slider.scss";
import { useState } from "react";
import arrowLeft from "./../../assets/arrow-left.png";
import arrowRight from "./../../assets/arrow-right.png";

const Slider = ({ slides }) => {
  // définit l'état à 0 de current 
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Current = slide active
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <div className="slide slider__active-picture">
        <img
          src={slides[current]}
          alt="logement actif du slide"
          className="slider__picture"
        />

        {/* Ajout du compteur de slide. */}

        {length > 1 && (
          <span className="slider__number">
            {current + 1}/{length}
          </span>
        )}
      </div>

      {length > 1 && ( //Affichage des flèches seulement si length > 1 (si plusieurs images)
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img
              src={arrowLeft}
              alt="flèche de gauche"
              className="slider__prev-icon"
            />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img
              src={arrowRight}
              alt="flèche de droite"
              className="slider__next-icon"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
