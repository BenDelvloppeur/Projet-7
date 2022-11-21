import ArrowBot from "./../../assets/arrow-bot.png";
import "./../../styles/accordeon/_small.scss";
const SmallModel = (props) => {
  const { title, description } = props;
  return (
    <div className="aboutMainText">
      <div className="wrapper-about">
        <div className="accordeon">
          <div className="about-details">
            <p>{title}</p>
            <img src={ArrowBot} alt="flèche dépliante" />
          </div>
          <div>
            <p className="description-text-accordeon">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallModel;
