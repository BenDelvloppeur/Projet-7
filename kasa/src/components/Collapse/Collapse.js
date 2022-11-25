import { useState } from "react";
import ArrowBot from "./../../assets/arrow-bot.png";
import "./../../styles/collapse/_collapse.scss";

const Collapse = (props) => {
  // Utilisation de useState de react pour définir un état.
  // dans ce cas on l'utilise un bouléen

  const [open, setOpen] = useState(false);

  const { title, description } = props;
  return (
    <div className="aboutMainText">
      <div className="wrapper-about">
        {/* si c'est false on à seulement la casse "accordeon" 
      si c'est true alors la classe accordeon-open */}
        <div className={open ? "accordeon accordeon-open" : "accordeon"}>
          {/* utilisation du "!" pour qu'a chaque click l'inverse ce produise
           dans ce cas : open, close etc... ( false, true)*/}
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
