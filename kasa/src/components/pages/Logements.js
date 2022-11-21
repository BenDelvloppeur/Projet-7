// import styles from "./../../styles/header/_teste.module.scss";
import ArrowRight from "./../../assets/arrow-right.png";
import ArrowLeft from "./../../assets/arrow-left.png";
import Slider from "../Appartement/Slider";
import SmallModel from "../accordeon/SmallModel";

const Logements = () => {
  return (
    <>
      <Slider arrowRight={ArrowRight} arrowLeft={ArrowLeft} />
      <SmallModel title="Description" description="..." />
      <SmallModel title="Equipements" description="..." />
    </>
  );
};

export default Logements;
