import "./../../styles/appartements/_slider.scss";
import { useState } from "react";
import arrowLeft from "./../../assets/arrow-left.png";
import arrowRight from "./../../assets/arrow-right.png";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "slide slider__active-picture"
                : "slide slider__inactive-picture"
            }
          >
            {index === current && (
              <img src={picture} alt="" className="slider__picture" />
            )}
            {/* Ajout du compteur de slide. */}
            {index === current && (
              <span className="slider__number">
                {current + 1}/{length}
              </span>
            )}
          </div>
        );
      })}
      {length > 1 ? ( //Affichage des flèches seulement si length > 1 (si plusieurs images)
        <>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="" className="slider__prev-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="" className="slider__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Slider;
