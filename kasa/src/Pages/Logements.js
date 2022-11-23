// import styles from "./../../styles/header/_teste.module.scss";
import { useParams } from "react-router-dom";
import Rating from "../components/Appartement/Rating";
import Tags from "../components/Appartement/Tags";
import logements from "./../Datas/logements.json";
import Slider from "./../components/Appartement/Slider";
import "./../styles/pages/_logements.scss";
import Collapse from "./../components/Collapse/Collapse";
import Server from "../components/Appartement/Server";

const Logements = () => {
  const { logementId } = useParams();
  const logement = logements.find((logement) => logement.id === logementId);
  const { title, location, rating, host, equipments, description, pictures } =
    logement;
  return (
    <>
      <div className="logements">
        <Slider slides={pictures} />
        <div className="logements__content">
          <div className="logements__informations">
            <h1 className="logements__title">{title}</h1>
            <p className="logements__location">{location}</p>
            <div className="logements__tags">
              {logement.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="logements__rating-and-host">
            <Rating rating={rating} />
            <Server host={host} />
          </div>
        </div>
        <div className="logements__dropdowns">
          <Collapse title="Description" description={description} />
          <Collapse
            title="Equipement"
            description={equipments.map((item) => (
              <li key={item} className="logements__equipements">
                {item}
              </li>
            ))}
          />
        </div>
      </div>
    </>
  );
};

export default Logements;
