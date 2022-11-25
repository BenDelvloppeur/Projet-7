import "./../../styles/cards/_card-model.scss";

const CardsModel = (props) => {
  // Utilisation des props pour les contenus modifiable.
  const { title, image } = props;
  return (
    <div className="card">
      <img src={image} alt="" className="card__img" />
      <div className="card__overlay"></div>
      <h2 className="card__title">{title}</h2>
    </div>
  );
};
export default CardsModel;
