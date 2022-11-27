// style
import "./../../styles/appartements/_rating.scss";
import greystar from "./../../assets/greyStar.png";
import redstar from "./../../assets/redStar.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Boucle du tableau stars */}
      {stars.map((star) =>
      // si Rating plus grand ou égale à la valeurs du tableau 
      // stars alors étoile rouge sinon étoile grise.
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt="étoile rouge"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt="étoile grise"
          />
        )
      )}
    </div>
  );
};

export default Rating;
