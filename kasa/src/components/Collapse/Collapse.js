import { useState } from "react";
import ArrowBot from "./../../assets/arrow-bot.png";
import "./../../styles/collapse/_collapse.scss";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);

  const { title, description } = props;
  return (
    <div className="aboutMainText">
      <div className="wrapper-about">
        <div className={open ? "accordeon accordeon-open" : "accordeon"}>
          <div className="about-details" onClick={() => setOpen(!open)}>
            <p>{title}</p>
            <img src={ArrowBot} alt="flèche dépliante" />
          </div>
          <div className="p-background">
            <p className="description-text-accordeon">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
