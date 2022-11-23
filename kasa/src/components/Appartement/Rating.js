// style
import "./../../styles/appartements/_rating.scss";
import greystar from "./../../assets/greyStar.png";
import redstar from "./../../assets/redStar.png";

const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redstar}
            alt=""
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greystar}
            alt=""
          />
        )
      )}
    </div>
  );
};

export default Rating;