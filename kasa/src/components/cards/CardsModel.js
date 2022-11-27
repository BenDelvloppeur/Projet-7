import "./../../styles/cards/_card-model.scss";

const CardsModel = (props) => {
  // Utilisation des props pour les contenus modifiable.
  const { title, image } = props;
  return (
    <>
      <div className="card">
        <img src={image} alt="Couverture du logement" className="card__img" />
      </div>
      {/* :after modifié car "card prenais en compte le title." */}
      <div className="card__2">
        <h2 className="card__title">{title}</h2>
      </div>
    </>
  );
};
export default CardsModel;
